const express = require('express')
const app = express()
const port = 1518
let counter = 0

app.use(express.static('public'))

app.get('/hello', (req, res) => res.send('Service Unavailable The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later.'))

app.get('/counter', function (req, res) {
	counter = counter + 1
  res.send('Counter: ' + counter)
})

app.get('/date', function (req, res) {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;
  res.send('Date: ' + today);
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))