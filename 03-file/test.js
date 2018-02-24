var file = require('fs');

// Sync biên dịch từ trên xuống theo thứ tự
var readfile = file.readFileSync('test.txt', 'utf8');
console.log(readfile);

var writefile = file.writeFileSync('test.txt', 'Hello Trinh');

// Not Sync câu lệnh sẽ được thực thi cuối cùng
var readfile = file.readFile('test.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});

var writefile = file.writeFile('test-one.txt', 'Enter Content Here!', function(err) {
    if (err) throw err;
    console.log("Success");
});

var appendfile = file.appendFile('test-one.txt', 'Enter Content Here! Update', function(err) {
    if (err) throw err;
    console.log("Success Update");
});

var deletefile = file.unlink('test.txt');

//Create folder
file.mkdirSync('test.txt');
file.rmdirSync('test.txt');

file.mkdir('folder-name', function() {
    file.readFile('test-one.txt', 'utf8', function(err, data) {
        file.writeFileSync('./folder-name/test-two.txt', data);
    });
});
