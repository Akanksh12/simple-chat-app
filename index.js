const { createServer } = require("node:http");
const hostname = "0.0.0.0";
const port = 6969;

const fs = require('node:fs');
var mime = require('mime-types');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sql', (err) => {
    if (err != null)
    {
        console.log(err);
    }
});
db.run('CREATE TABLE IF NOT EXISTS messages (message_id INTEGER PRIMARY KEY ASC, message TEXT);')

const server = createServer((req, res) => {
    // serve index.html
    if (req.method == 'GET' &&  req.url == '/') { 
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile(__dirname + '/html/index.html', 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 501;
                console.log(err);
                res.end(err);
                return;
            }
            res.end(data);
        })
    }
    // serve any other files available
    
    if (req.method = 'GET') {
        fs.readFile(__dirname + req.url, 'utf-8', (err, data) => {
            res.statusCode = 200;
            
            if(err){
                res.statusCode = 404;
                res.end(`${req.url} not found`)
            }
            res.end(data);
        })
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});