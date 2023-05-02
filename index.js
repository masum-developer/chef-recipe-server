const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())
const port =process.env.PORT || 5000
const cuisines = require('./data/cuisines.json')


app.get('/',(req,res)=>{
    res.send('Chef corners is running')
})
app.get('/cuisines',(req,res)=>{
    res.send(cuisines)
})



app.listen(port,()=>{
    console.log(`Chef corners app is running on port: ${port}`)
})
