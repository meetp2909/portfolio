const { Console } = require("console");
const express =  require("express");

const app = express();

const fs = require('fs');

const path = require('path');

const port = process.env.PORT || (8000);


app.use(express.static("public"))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('img', express.static(__dirname + 'public/img'))

app.get("/", (req, res) =>{
    
    const data = fs.readFileSync("index.html")
    res.end(data.toString());
})



app.listen(port, () =>{
    console.log(`${port} file is listening `)
})