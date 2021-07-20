const app = require("./server");

var server = app.listen(8081, function () {
  var host = 'localhost'
  var port = server.address().port
  console.log("RESTful-API app listening at http://%s:%s", host, port)
});
