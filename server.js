const express=require('express')
//const dbConnect=require('./dbConnect')
const connectToDatabase = require('./dbConnect');
connectToDatabase();
const app=express()
app.use(express.json())
const userRoute=require('./routes/usersRoute')
const transactionsRoute = require('./routes/transactionsRoute')
app.use('/api/users/',userRoute)
app.use('/api/transactions/' , transactionsRoute)
const port=5000

app.get('/', (req,res)=>res.send("hello world"))
app.listen(port,()=>console.log(`Node JS Server started at port ${port}!`))