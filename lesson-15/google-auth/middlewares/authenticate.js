import passport from "passport";
import passportGoogle from "passport-google-oauth2";
import dotenv from "dotenv";

import User from "../models/user.js";

dotenv.config();

const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = process.env;

const GoogleStategy = passportGoogle.Strategy;

const googleParams = {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true,
};

const googleStrategy = new GoogleStategy(googleParams, async(request, accessToken, refreshToken, profile, done)=> {
    const user = await User.findOne({googleId: profile.id});
    if(user){
         done(null, user);
         return;
    };
    const data = {
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
    };

    const newUser = await User.create(data);
    done(null, newUser);
});

passport.use("google", googleStrategy);

export default passport;