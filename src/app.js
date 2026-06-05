import express from "express"
import router from "./router/index.js"
const app=express()
app.get("/",(req,res)=>{
res.status(200).send({
    staus:"success",
    message:"server is active"
})
})
app.use("/api/v1",router)






export default app