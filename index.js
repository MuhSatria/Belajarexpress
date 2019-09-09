const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/nama', (req, res) => res.send('Hello Athanasia'))
app.get('/about', (req, res) => res.send('Hello Artmisia'))
app.get('/contact_us', (req, res) => res.sendFile(__dirname + '/contact_us.html'))
app.get('/calculate', (req,res) => res.sendFile(__dirname+ '/calculate.html'))

app.listen(port, () => console.log(`Black Pink ${port}!`))
app.post('/contact_us', (req, res) => res.send(`Name: ${req.body.name} | Email: ${req.body.email} | Subject: ${req.body.subject} | Massage: ${req.body.massage}`))


app.post('/calculate', (req, res) => {
  var number1 = parseInt(req.body.no1)
  var number2 = parseInt(req.body.no2)
  var result = number1 / number2

  res.send(`Result is ${result}`)
})

// parseInt digunakan untuk memaksakan var number menjadi integer, karena karena kita tidak menggunakan itu ada kemungkinan dia akan menjadi string bukan integer