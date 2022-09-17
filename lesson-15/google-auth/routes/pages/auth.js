import express from "express";
import jwt from "jsonwebtoken";

import passport from "../../middlewares/authenticate.js";

const {SECRET_KEY} = process.env;

const router = express.Router();

router.get("/", (req, res)=> {
    res.send(`<a href="http://localhost:3000/auth/google">Login with google</a>`)
})

router.get("/google", passport.authenticate("google", {scope: ["email", "profile"]}));

router.get("/google/callback", passport.authenticate("google", {session: false}), async(req, res)=> {
    
    const payload = {
        id: req.user._id
    };

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "24h"});

    res.json(token);
    
    res.redirect("/")
})

export default router;