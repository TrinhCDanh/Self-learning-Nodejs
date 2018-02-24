var fs = require('fs');

// Giống như đọc file bình thường fs.readFile
var readable = fs.createReadStream(__dirname + "/readMe.txt", {encoding: 'utf8'});

// Đọc các buffer
//var readable = fs.createReadStream(__dirname + "/readMe.txt");

var writeable = fs.createWriteStream(__dirname + "/writeMe.txt");

readable.on('data', (data_of_readable) => {
    console.log('Đọc luồng nào: ');
    writeable.write(data_of_readable);
});