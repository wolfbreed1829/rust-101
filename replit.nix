{ pkgs }: {
  deps = [
    pkgs.rustc
    pkgs.cargo
    pkgs.gcc
    pkgs.rust-analyzer
  ];
}
