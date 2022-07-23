const mongoose = require('mongoose');
const express=require('express');
const app=express();
require('dotenv').config()
var bodyParser = require('body-parser')
const cookieParser=require('cookie-parser');
const cors=require('cors');


//my routes
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/user')
const certiRoutes=require('./routes/certi_badge');
//DB connection
mongoose.connect("mongodb://localhost:27017/backendDanalitic").then(()=>{
    console.log("DB IS CONNECTED")
}).catch((err)=>{
    console.log(err);
});


//Port
const port=process.env.PORT || 8000;
//Middleware
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(cookieParser());
app.use(cors());
app.use(jsonParser)

//Routes
app.use("/api",jsonParser,urlencodedParser,authRoutes);
app.use("/api",jsonParser,urlencodedParser,userRoutes);
app.use("/api",jsonParser,urlencodedParser,certiRoutes);


app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})