const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())
const port =process.env.PORT || 5000
const chefs = require('./data/chefs.json')


app.get('/',(req,res)=>{
    res.send('Chef corners server is running')
})
app.get('/chefs',(req,res)=>{
    res.send(chefs)
})
app.get('/chefs/:id',(req,res)=>{
    const id= req.params.id;
    const chefDetails = chefs.find(c=>c.id===id);
    res.send(chefDetails)
})

app.listen(port,()=>{
    console.log(`Chef corners app is running on port: ${port}`)
})
