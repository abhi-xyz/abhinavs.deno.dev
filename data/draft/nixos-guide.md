a basic configuration.nix

```nix
{ config, lib, pkgs, ... }:

{
    imports = [
        ./hardware-configuration.nix
    ];

    boot.loader.systemd-boot.enable = true;
    boot.loader.efi.canTouchEfiVariables = true;

    networking.hostName = "nixos";
    networking.networkmanager.enable = true;

    time.timeZone = "Asia/Kolkata";
    i18n.defaultLocale = "en_US.UTF-8";

    services.xserver.enable = true;
    services.xserver.xkb.layout = "us";

    services.pipewire = {
        enable = true;
        pulse.enable = true;
    };

    users.users.caretaker = {
        isNormalUser = true;
        extraGroups = [ "wheel" ];
        packages = with pkgs; [
            vim
        ];
    };

    environment.systemPackages = with pkgs; [
        vim
        tree
        wget
        git
    ];

    system.stateVersion = "24.05";
}
```
