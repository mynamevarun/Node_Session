// const fs = require("fs");

// Read a specified file.
// fs.readFile("package.json", function (err, data) {
//   console.log(data);
// });

// //The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
// fs.appendFile("mynewfile1.txt", "My name is", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// delete a file fs.unlink()
// fs.unlink("mynewfile1.txt", function (err) {
//   if (err) throw err;
//   console.log("File deleted!");
// });

// Create Server using http module
// const http = require("http");

// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end("Hello, World! This is ");
// };
// const server = http.createServer(requestListener);
// server.listen(8080);

// Create server using the Express module.
// Express is a framework used to create servers and build on the top of HTTP module that is inbuilt module.

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/get", (req, res) => {
  res.send("Hello World! I am get");
});

app.listen(port, () => console.log("Running on port ", port));
