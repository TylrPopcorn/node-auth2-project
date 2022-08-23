/*
  DEPENDENCIES

  npm install
  npm i dotenv
  npm i jsonwebtoken

  npm i -g fkill-cli

*/

require("dotenv").config()

const server = require('./api/server.js');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
