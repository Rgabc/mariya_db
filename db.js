//1 mongoose lib
const mongoose=require("mongoose")// import expore es6
//2n connect to mongodb
mongoose.connect("mongodb://0.0.0.0:27017/khan")// FOLDER MONGODB khan means folder 
// 3rd step server jo hai vo sirf index file read kr taa hai 
module.exports=mongoose;
// wire tv se connect kiye 
