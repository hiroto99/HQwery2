node -v
cd /usr/ports/www/node-devel/ && make install clean
node -v

npm -v
sudo npm install -g npm
npm -v

wget git.io/nodebrew
perl nodebrew setup

npm init -y
npm install @babel/core @babel/cli
npm install @babel/preset-env

@babel/core -v
@babel/cli -v
@babel/preset-env -v