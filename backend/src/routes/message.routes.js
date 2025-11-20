import express from "express"
import { sendController } from "../controllers/message.controller.js"
const router = express.Router()
router.post("/send" , sendController)
// router.post("/sign-up" , signUpController)
// router.post("/logout" , logoutController)

export default router