'use strict';

// var apiai = require("../module/apiai");
var apiai = require("apiai");

var apiai = apiai("134aa955f4fb47b7a1c903efefd35604");
var express = require('express');
var app = express();
var fs = require('fs');

var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function() {/* … */
});

//anonymous function
server.listen(8000, function() {
    console.log('Server listening on port 8000!')
})

app.get('/', function(req, res) {
    // res.sendfile(__dirname + '/osc_test0.txt');
    var fileTxt = fs.readFileSync(__dirname + '/osc_test0.txt', "utf-8");
    //  {
    // console.log(fileTxt);
    var tempData = (fileTxt.split('\n'));
    var stressValue = tempData[tempData.length - 2];
    // console.log(typeof(stressValue));
    var currentValue = JSON.parse(stressValue);
    console.log(currentValue.stressed)
    if (currentValue.stressed) {
      var options = {
          sessionId: '<UNIQE SESSION ID>'
      };

      var request = apiai.textRequest('stressed', options);

      request.on('response', function(response) {
          console.log(response);
      });

      request.on('error', function(error) {
          console.log(error);
      });

      request.end();

    }

    // }

});
