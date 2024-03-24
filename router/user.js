// api ko server se connect krtaa hai
const express=require("express");
const router=express.Router()// he jo method hai api ko server se connect karengaa
router.post("/",require("../controller/user.js").createUser)
//rouert connection of post
// but server only read index.js to apan ye route ko export import in index.js
module.exports=router;
