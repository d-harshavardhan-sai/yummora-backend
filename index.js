const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const vendorRoutes = require('./routes/vendorRoutes')
const firmRoutes = require('./routes/firmRoutes')
const productRoutes = require('./routes/productRoutes')
const path = require('path')

const app = express()
dotEnv.config()


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB is connected Successfully"))
.catch((error)=>console.log(error))


app.use(bodyParser.json())
app.use('/vendor', vendorRoutes)
app.use('/firm', firmRoutes)
app.use('/product', productRoutes)
app.use('/uploads', express.static('uploads'))

app.use('/',(req,res)=>{
    res.send("<h1>Welcome to home page</h1>")
})

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server started and running at ${PORT}`)
})


