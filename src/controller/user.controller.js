import User from "../model/User.model.js"

export const getAllUsers=async(req,res)=>{
try{
const users=await User.find()
res.status(200).send({status:"success",
    message:"all user fetched!",
    data:users
})

}catch(err){
console.log(err)
}
}



export const createUser=async(req,res)=>{
    
}