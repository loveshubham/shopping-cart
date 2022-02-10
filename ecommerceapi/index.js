const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoute = require('./routers/user')
const authRoute = require('./routers/auth')
const productRoute = require('./routers/product')
const orderRoute = require('./routers/order')
const cartRoute = require('./routers/cart')
const categoryRoute = require('./routers/category') 
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors())
mongoose.connect(process.env.dbURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
},()=>{
    console.log("Database connection established");
})

app.get('/api/healthcheck',(req,res)=>{
    console.log("Everything is Fine.! 🙂");
    res.send("Everything is Fine.! 🙂")
})
app.use('/api/auth',authRoute)
app.use('/api/user',userRoute)
app.use('/api/product',productRoute)
app.use('/api/orders',orderRoute)
app.use('/api/cart',cartRoute)
app.use('/api/category',categoryRoute)

app.listen(process.env.PORT,()=>{
    console.log("Server is Live....");
})
