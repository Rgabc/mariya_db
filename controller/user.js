// data structure ke madath se api banayenge
const userModel=require("../Module/user.js")// data structure variable me store ho gayaa hai
// post api
 exports.createUser= async(req,res)=>{
try{
    const saveData= await new userModel(req.body).save()
    res.json(saveData)

}
catch(err){
    res.json(err)

}
   
}