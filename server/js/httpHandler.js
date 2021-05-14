const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  }

  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, headers);
      let command = messageQueue.dequeue();
      if (command) {
        console.log('Responding with:', command);
        res.end(command);
      } else {
        res.end();
      }
    }
  }

  if (req.url === '/background.jpg') {
    fs.readFile(module.exports.backgroundImageFile, (err, fileData) => {
      if (err) {
        res.writeHead(404);
      } else {
        res.writeHead(200, {
          'Content-Type': 'image/jepg',
          'Content-Length': fileData.length
        });
        res.write(fileData, 'binary');
      }
      res.end();
      next();
    })
  }

};
