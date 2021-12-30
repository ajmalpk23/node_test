const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/ajm', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.post('/ajm', (req, res) => {
    var data = req.query.ajm;
    console.log(data)
    res.send('form submited successfully')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})