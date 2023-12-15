const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.static('public'))
app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname,'index.html'))
})

app.listen(3000,() => console.log('server is listening on port 3000.....'))
