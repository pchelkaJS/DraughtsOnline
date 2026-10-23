import express from "express"
import Auth from "./../controllers/authController"
import { isURL } from "validator"

const router = express.Router()

function api(url: string){
    return `/api/${url}`
}

router.get(api("/login"), Auth.login)
router.post(api("/register"), Auth.register)

export default router