const express =require("express");
const bodyParser =require("body-parser");
const cors =require("cors");
const { configDotenv } = require("dotenv");
configDotenv();


const app = express();

app.use(cors()); //cors error
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//app.use(bodyParser.urlencoded({extended:true}))

// app.use('/',(req,res)=>{
//     const request = req.body;
//     console.log(request);
// })


//env

app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
});



//routes
const formRoute=require("./routes/formRoute")

app.use("/api",formRoute)


//database
const ctd =require("./database/db")
ctd();
