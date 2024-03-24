//1st  express lib taki code easy tarikey se lik sakey 
const express=require("express");
//2nd express() ek varibale basically coder jo hai app name ke variable me method store kr k rak taa hai 
// const app= express();
const mariya=express();
const db=require("./db");
// 1st we check server connection 
const PORT =4000;

// mariya.get("/",(req,res)=>{ // req apn taraf se data jataa hai server ko 
//     // res server se dataa miltaa hai
//     res.send("Hello World");
// })
// 2nd step data base connection 
db.connection.on("connected",(err)=>{
    if(err){
        console.log("not connected")
    }
    else{
        console.log(" mongodb is on")
    }

})

// middleware ki apna data json format
mariya.use(express.json())
//use vo ek path ready krtaa hai taki apnaa jo rout ka dataa vo server se connect ho jaye
mariya.use("/k",require("./router/user.js"))// now route is connected to server 


 


// server is  on
mariya.listen(PORT,()=>{
    console.log(`server on ${PORT}`)
})


