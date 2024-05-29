const express = require('express')
const port = 3000
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    try{
        console.log(`Started in http://localhost:${port}`);
    } catch(err){
        console.log(err);
    }
})