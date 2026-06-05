import express from "express"
import { createUser, getAllUsers } from "../controller/user.controller.js"
const router=express.Router()


router.get("/",getAllUsers)
router.post("/signup",createUser)



export default router