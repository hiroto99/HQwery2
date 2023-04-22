npm init -y

@babel/core -v
@babel/cli -v
@babel/preset-env -v

sudo npm uninstall -g @babel/preset-env
npm install -g @babel/cli@latest
sudo npm uninstall -g @babel/cli
sudo npm uninstall -g @babel/core

npm -v
node -v
nodebrew -v

npm uninstall -g npm
rm -rf .npm \
npm -v

brew uninstall node
lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom | while read i; do sudo rm /usr/local/${i}; done
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules var/db/receipts/org.nodejs.*

brew uninstall nodebrew
curl -o uninstall-node.sh https://gist.githubusercontent.com/nicerobot/2697848/raw/uninstall-node.sh
chmod u+x uninstall-node.sh
./uninstall-node.sh
rm uninstall-node.sh

sudo rm -rf /usr/local/include/node
sudo rm -rf /usr/local/lib/dtrace
rm -rf ~/.node-gyp
rm -rf ~/.npm
rm -rf ~/sourcemint

brew list
brew uninstall anyenv
brew uninstall node
brew uninstall npm

brew doctor
brew cleanup

npm -v
node -v
nodebrew -v
