import express from "express"

const router = express.Router()

router.post("/register", (req, res) => {
    try{
        const { username, password, email } = req.body;

        if (!username || !password || !email || !email.includes("@")) {
          return res.status(400).json({ message: "Некорректные данные для регистрации" });
        }
    } catch (err){
        res.status(500).send(err)
    }    
})

export default router