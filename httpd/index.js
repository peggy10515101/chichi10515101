'use strict';

let http = require('http');

http.createServer((request, response) => {
let fs = require('fs');
let postData = ''; // POST 資料

// 利⽤ 'data' event 消耗掉 data chunk;
// 'end' event 才會被 fired
request.on('data', (chunk) =>
postData += chunk;

console.log(
' 接收的 POST data ⽚段 k: [' + chunk + '].'
);
});

request.on('end', () => {
switch (request.url) {
case '/':
fs.readFile('../htdocs/index.html', (err, data) => {
if (err) {
console.log(' 檔案讀取錯誤');
}
else {
response.writeHead(200, {
'Content-Type': 'text/html'
});

response.write(data);
response.end();
}
});

break;

default:
console.log(' 未定義的存取: ' + request.url);

response.end();

break;
}
});
}).listen(8088);

// log message to Console
console.log(' 伺服器啓動，連線 url: http://127.0.0.1:8088/');
