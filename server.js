var express = require('express')
var app = express()

var hashem = {
    id: 1,
    name: "Hashem"
}

app.get('/', function (req, res) {
    res.header("Content-Type", "Application/Json")
    res.end(JSON.stringify(hashem))
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})