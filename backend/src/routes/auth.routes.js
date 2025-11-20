import express from "express"
import { loginController, logoutController, signUpController } from "../controllers/auth.controller.js"
const router = express.Router()
router.post("/" , loginController)
router.post("/sign-up" , signUpController)
router.post("/logout" , logoutController)

export default router