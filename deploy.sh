sudo apt update && sudo apt install -g nodejs npm
sudo npm install -g pm2
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm install 18.17.0
nvm use 18.17.0
pm2 stop insurance_app
cd health-insurance-app-master/
npm install
pm2 start bin/www --name health_app