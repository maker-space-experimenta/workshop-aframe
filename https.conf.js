var fs = require("fs");
 
module.exports = {
    cert: fs.readFileSync(__dirname + "/.certs/ssl.crt"),
    key: fs.readFileSync(__dirname + "/.certs/ssl.key"),
    passphrase: "Pass1word"
};