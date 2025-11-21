import express from "express"
import { loginController, logoutController, signUpController } from "../controllers/auth.controller.js"
const router = express.Router()
router.post("/sign-in" , loginController)
router.post("/sign-up" , signUpController)
router.post("/logout" , logoutController)

export default router