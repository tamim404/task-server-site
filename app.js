const express = require("express");
const router = require("./src/routes/api");
const path= require("path");
const app = new express();


//Security Middleware
const cors= require("cors");
const mongoSanitize= require("express-mongo-sanitize");
const helmet= require("helmet");
const rateLimit= require("express-rate-limit");
const xss= require("xss-clean");
const hpp= require("hpp");



//Database
const mongoose= require("mongoose");
app.use(express.static("client/build"));


//Security Middleware Implement
app.use(cors());
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
app.use(hpp());
//
app.use(express.json());

//Rate limiter
const limiter=rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})

app.use(limiter)



// //Database Connection
let URL="mongodb+srv://tamim404:tamim404@cluster0.jmg0kt7.mongodb.net/TASK";
let OPTION={autoIndex:true}
mongoose.set('strictQuery', false);
mongoose.connect(URL,OPTION,(error)=>{
    if(error) {
        console.log(error)
    }else {
        console.log("Database connect success")
    }
});



//
app.use("/api/v1",router);


//

// app.get("*",function (req,res) {
//     res.sendFile(path.resolve(__dirname,'client','build','index.html'))
// });




module.exports=app;



