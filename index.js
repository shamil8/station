let jsonServer = require('json-server');
let db = require('./db.js');
let fs = require('fs');

let server = jsonServer.create();

// important to do this for now.sh to work
// https://spectrum.chat/zeit/general/how-do-i-upload-a-file-to-the-tmp-directory~a1548ae0-91b1-42f5-9388-c79673ba09e4
fs.writeFileSync('/tmp/db.json', JSON.stringify(db()));

// important to have /tmp here otherwise now.sh won't write to file
// https://stackoverflow.com/questions/43389724/lambda-function-error-erofs-read-only-file-system-open-tmp-test-zip-proc
let router = jsonServer.router('/tmp/db.json');
let middlewares = jsonServer.defaults();
let port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);
server.listen(port, function() {
    console.log('JSON Server is running on http://localhost:' + port);
});
