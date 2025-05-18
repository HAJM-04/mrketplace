# Github Automations

```sh
    https://docs.microsoft.com/windows/wsl/install
    wsl --install
```
Open the new ubuntu installation WIN + WSL

## Log Example

```sh
    Provisioning the new WSL instance Ubuntu
    This might take a while...
    Create a default Unix user account: jackson
    New password:
    Retype new password:
    passwd: password updated successfully
    To run a command as administrator (user "root"), use "sudo <command>".
    See "man sudo_root" for details.

    Welcome to Ubuntu 24.04.2 LTS (GNU/Linux 5.15.167.4-microsoft-standard-WSL2 x86_64)

    * Documentation:  https://help.ubuntu.com
    * Management:     https://landscape.canonical.com
    * Support:        https://ubuntu.com/pro

    System information as of Sun May 18 14:54:54 CST 2025

    System load:  0.14                Processes:             32
    Usage of /:   0.1% of 1006.85GB   Users logged in:       0
    Memory usage: 3%                  IPv4 address for eth0: 172.24.163.136
    Swap usage:   0%


    This message is shown once a day. To disable it please create the
    /home/jackson/.hushlogin file.
    jackson@Jackson-Grim-gamer-pc:~$
```

Install gh in your WSL environment

```sh
    # 1. Add the key of official repo
    curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg \
    | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg

    sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg

    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] \
    https://cli.github.com/packages stable main" \
    | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null

    # 2. Update and install
    sudo apt update
    sudo apt install gh -y

    # 3. Verfy
    gh --version
```

Log into Github 

```sh
    jackson@Jackson-Grim-gamer-pc:/mnt/c/Users/User/OneDrive/Documents/github/marketplace/.github/automations$ gh auth login
    ? Where do you use GitHub? GitHub.com
    ? What is your preferred protocol for Git operations on this host? HTTPS
    ? Authenticate Git with your GitHub credentials? Yes
    ? How would you like to authenticate GitHub CLI? Login with a web browser

    ! First copy your one-time code: 3AE1-EFD7
    Press Enter to open https://github.com/login/device in your browser...
    ! Failed opening a web browser at https://github.com/login/device
    exec: "xdg-open,x-www-browser,www-browser,wslview": executable file not found in $PATH
    Please try entering the URL in your browser manually
    ✓ Authentication complete.
    - gh config set -h github.com git_protocol https
    ✓ Configured git protocol
    ! Authentication credentials saved in plain text
    ✓ Logged in as jacksongrimmx
    jackson@Jackson-Grim-gamer-pc:/mnt/c/Users/User/OneDrive/Documents/github/marketplace/.github/automations$
```

Set ownership confidence

```sh
    git config --global --add safe.directory /mnt/c/Users/User/OneDrive/Documents/github/marketplace
```

Run the bash script

```sh
    cd /mnt/c/Users/Documents/github/marketplace/.github/automations
    bash environment-variables-deployments.sh
```

Log Github Confirmation

```sh
✓ Set Actions secret FIREBASE_API_KEY for jacksongrimmx/marketplace
✓ Set Actions secret FIREBASE_AUTH_DOMAIN for jacksongrimmx/marketplace
✓ Set Actions secret FIREBASE_PROJECT_ID for jacksongrimmx/marketplace
✓ Set Actions secret FIREBASE_STORAGE_BUCKET for jacksongrimmx/marketplace
✓ Set Actions secret FIREBASE_MESSAGING_SENDER_ID for jacksongrimmx/marketplace
✓ Set Actions secret FIREBASE_APP_ID for jacksongrimmx/marketplace
✓ Set Actions secret FIREBASE_MEASUREMENT_ID for jacksongrimmx/marketplace
✓ Set Actions secret FIREBASE_SERVICE_ACCOUNT_MARKETPLACE_A9AB1 for jacksongrimmx/marketplace
```sh