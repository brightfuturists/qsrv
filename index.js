/*

Setup & Usage:

1) Install Node.js for Linux (login as `root` if Debian):
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs

2) Install qsrv:
npm i

2) Place files and directories into `qsrv/files`:
cp file.txt qsrv/files/

2) Run your server:
node qsrv/index.js

3) Use your server:
http://localhost:80/file.txt

or

curl http://localhost:80/file.txt -o file.txt

(In most use cases, a Domain or an IP would be in place of `localhost`)

*/

const express = require('express')
const app = express()
const port = 80

app.use(express.static(__dirname + '/files', { dotfiles: 'allow' } ))

app.listen(port, () => {
  console.log('HTTP server running on port 80')
})

