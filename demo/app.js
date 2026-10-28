import { executeModule } from './wasi.mjs';

const $ = (selector) => document.querySelector(selector);
const repo = 'https://github.com/wolfbreed1829/rust-101';
const modules = new Map();
let lessons = [];
let selected = 0;
let runSequence = 0;
let explored;
try { explored = new Set(JSON.parse(localStorage.getItem('rust101-explored') || '[]')); }
catch { explored = new Set(); }

function updateProgress() {
  const count = lessons.filter(lesson => explored.has(lesson.id)).length;
  $('#progress-count').textContent = `${count} of ${lessons.length}`;
  $('#progress').value = count;
  document.querySelectorAll('.lesson-link').forEach((button, i) => {
    button.classList.toggle('is-explored', explored.has(lessons[i].id));
  });
}

const escapeHtml = text => text.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
function highlight(code) {
  return code.trimEnd().split('\n').map((line, i) => {
    const tokens = /\/\/.*|"(?:\\.|[^"\\])*"|\b(?:fn|let|mut|if|else|for|in|true|false)\b|\b\d+\b|\b[a-zA-Z_]\w*!?(?=\()/g;
    let html = '';
    let position = 0;
    for (const match of line.matchAll(tokens)) {
      html += escapeHtml(line.slice(position, match.index));
      const token = match[0];
      const type = token.startsWith('//') ? 'comment' : token.startsWith('"') ? 'string' : /^\d/.test(token) ? 'number' : /^(fn|let|mut|if|else|for|in|true|false)$/.test(token) ? 'keyword' : 'call';
      html += `<span class="tok-${type}">${escapeHtml(token)}</span>`;
      position = match.index + token.length;
    }
    return `<span class="source-line"><span class="line-number" aria-hidden="true">${i + 1}</span>${html}${escapeHtml(line.slice(position))}</span>`;
  }).join('');
}

function setStatus(message, isError = false) {
  $('#status-text').textContent = message;
  $('#run-status').classList.toggle('is-error', isError);
}

function resetOutput() {
  runSequence++;
  $('#output').textContent = '';
  $('#output').hidden = true;
  $('#empty-output').hidden = false;
  $('#run').disabled = lessons.length === 0;
  $('#run span').textContent = 'Run program';
  $('#run').setAttribute('aria-busy', 'false');
  setStatus('Ready when you are');
}

function selectLesson(index, focus = false) {
  selected = Math.max(0, Math.min(lessons.length - 1, index));
  const lesson = lessons[selected];
  resetOutput();
  $('#lesson-number').textContent = lesson.id;
  $('#lesson-topic').textContent = lesson.topic.toUpperCase();
  $('#lesson-title').textContent = lesson.title;
  $('#explanation').textContent = lesson.explanation;
  $('#source-label').textContent = lesson.source;
  $('#source-code').innerHTML = highlight(lesson.code);
  $('#command').textContent = lesson.command;
  $('#exercise').textContent = lesson.exercise;
  $('#question').textContent = lesson.question;
  $('#exercise-link').href = `${repo}/blob/main/lessons/${lesson.page}.md`;
  $('#lesson-position').replaceChildren(document.createTextNode(`${selected === 7 ? 'Bonus' : 'Lesson'} ${selected + 1} of 8 `));
  const duration = document.createElement('span');
  duration.textContent = `· ${lesson.duration}`;
  $('#lesson-position').append(duration);
  $('#previous').disabled = selected === 0;
  $('#next').disabled = selected === lessons.length - 1;
  $('#copy-code').disabled = false;
  $('#copy-code').textContent = 'Copy code';
  document.querySelectorAll('.lesson-link').forEach((button, i) => {
    if (i === selected) button.setAttribute('aria-current', 'step');
    else button.removeAttribute('aria-current');
  });
  history.replaceState(null, '', `#lesson-${lesson.id}`);
  document.title = `${lesson.title} · Rust 101`;
  if (focus) $('#lesson-title').focus({ preventScroll: true });
}

async function getModule(lesson) {
  if (!modules.has(lesson.id)) {
    const pending = (async () => {
      const response = await fetch(lesson.wasm);
      if (!response.ok) throw new Error('The Rust program could not be loaded. Check your connection and try again.');
      return WebAssembly.compile(await response.arrayBuffer());
    })();
    modules.set(lesson.id, pending);
    pending.catch(() => modules.delete(lesson.id));
  }
  return modules.get(lesson.id);
}

async function runProgram() {
  const lesson = lessons[selected];
  const sequence = ++runSequence;
  $('#run').disabled = true;
  $('#run').setAttribute('aria-busy', 'true');
  $('#run span').textContent = 'Running…';
  setStatus('Loading the compiled Rust program…');
  try {
    const module = await getModule(lesson);
    if (sequence !== runSequence) return;
    const result = executeModule(module);
    $('#empty-output').hidden = true;
    $('#output').hidden = false;
    $('#output').textContent = result.stdout + result.stderr || '(The program produced no output.)';
    if (result.exitCode !== 0) {
      setStatus(`Program exited with code ${result.exitCode}`, true);
      return;
    }
    explored.add(lesson.id);
    try { localStorage.setItem('rust101-explored', JSON.stringify([...explored])); } catch { /* Progress still works for this visit. */ }
    updateProgress();
    setStatus('Finished successfully · Ran in your browser');
  } catch (error) {
    if (sequence !== runSequence) return;
    $('#empty-output').hidden = true;
    $('#output').hidden = false;
    $('#output').textContent = error.message || 'Something went wrong. Please try again.';
    setStatus('Unable to run · Try again', true);
  } finally {
    if (sequence === runSequence) {
      $('#run').disabled = false;
      $('#run').setAttribute('aria-busy', 'false');
      $('#run span').textContent = 'Run program';
    }
  }
}

$('#run').addEventListener('click', runProgram);
$('#clear-output').addEventListener('click', resetOutput);
$('#previous').addEventListener('click', () => selectLesson(selected - 1, true));
$('#next').addEventListener('click', () => selectLesson(selected + 1, true));
$('#copy-code').addEventListener('click', async () => {
  const lesson = lessons[selected];
  try {
    await navigator.clipboard.writeText(lesson.code);
    if (lessons[selected] === lesson) $('#copy-code').textContent = 'Copied!';
  } catch {
    setStatus('Copy is unavailable. Select the source code to copy it manually.', true);
  }
});
window.addEventListener('hashchange', () => {
  const index = lessons.findIndex(lesson => `#lesson-${lesson.id}` === location.hash);
  if (index >= 0) selectLesson(index);
});

async function initialize() {
  try {
    if (typeof WebAssembly === 'undefined') throw new Error('This browser does not support WebAssembly. Use a recent browser or open the full course on GitHub.');
    const response = await fetch('generated/lessons.json');
    if (!response.ok) throw new Error('The lesson files could not be loaded. Please refresh the page.');
    lessons = await response.json();
    $('#lesson-nav').replaceChildren();
    lessons.forEach((lesson, index) => {
      const button = document.createElement('button');
      button.className = 'lesson-link';
      button.type = 'button';
      button.innerHTML = `<span class="nav-number">${escapeHtml(lesson.id)}</span><span><span class="nav-title">${escapeHtml(lesson.title)}</span><span class="nav-topic">${escapeHtml(lesson.topic)}</span></span>`;
      button.addEventListener('click', () => selectLesson(index));
      $('#lesson-nav').append(button);
    });
    const index = lessons.findIndex(lesson => `#lesson-${lesson.id}` === location.hash);
    selectLesson(index < 0 ? 0 : index);
    updateProgress();
  } catch (error) {
    $('#load-error').textContent = error.message;
    $('#load-error').hidden = false;
    $('#explanation').textContent = 'Open the full course on GitHub while we get the demo ready.';
    $('#lesson-nav').textContent = 'Lessons unavailable';
    $('#next').disabled = true;
    setStatus('Demo could not load', true);
  }
}

initialize();
