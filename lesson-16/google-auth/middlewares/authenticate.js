import passport from "passport";
import passportGoogle from "passport-google-oauth2";
import dotenv from "dotenv";

import User from "../models/user.js";

dotenv.config();

const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL} = process.env;

const GoogleStragey = passportGoogle.Strategy;

const googleParams = {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL,
    passReqToCallback: true,
};

const googleCallback = async(req, accessToken, refreshToken, profile, done) => {
    try {
        const {email, displayName} = profile;
        const user = await User.findOne({email});
        if(user){
            return done(null, user);
            // req.user = user;
        }
        const newUser = await User.create({email, name: displayName});
        done(null, newUser);
    } catch (error) {
        done(error, false);
    }
}

const googleStrategy = new GoogleStragey(googleParams, googleCallback);

passport.use("google", googleStrategy);

export default passport;