var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var json = {
        name: 'Danh',
        major: 'Web Developer',
        age: 22
    };
    for (let item in json) {
        res.write(`${item} `);
    }
    res.write(JSON.stringify(json));
    res.end();
}).listen(8080);

console.log('Server is running');