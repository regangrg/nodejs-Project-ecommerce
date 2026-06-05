
import userRouter from "./user.router.js"
import express from "express"
const router=express.Router()
const allRouters=[
    {
        route:userRouter,
        path:"/user"
    },
    //   {
    //      path:"/user",
    //     router:userRouter
       
    // },
]



allRouters.map((el)=>{
router.use(el.path,el.route)
})


export default router