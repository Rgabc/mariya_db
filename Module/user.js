// 1st step we made structure thats tell  us how our data will be store
// structure we made here 
const mongoose=require("mongoose")// import 
// schema helps to build data structure 
 const userShema=new mongoose.Schema({
    fullName:String,
    phoneNumber:Number,

 })
 // data structure we build this with the help of schema method

 // export 
 module.exports=mongoose.model("mariya",userShema)
 // mariya jo hai vo collection kaa name hai
 // next step is data structure ke help se baki api banenge