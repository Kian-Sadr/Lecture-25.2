const express = require('express');
const app = express();

const web_files = express.static("public");
app.use(web_files);

app.get("/hello", function(req, res){
  res.send("<h1>Hello, Express!</h1>");
});

app.post("/goodbye", function(req, res){
  res.send('<h1>Goodbye, Express!</h1>');
});

app.listen(process.env.PORT || 3000);
