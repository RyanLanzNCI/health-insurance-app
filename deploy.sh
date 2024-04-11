sudo apt update && sudo apt install nodejs npm
sudo npm install -g pm2
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm install 18.17.0
nvm use 18.17.0
pm2 stop insurance_app
cd health-insurance-app/
npm install
pm2 start health-insurance-app-master/bin/www --name insurance_app
