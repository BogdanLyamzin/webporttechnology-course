import passportFacebook from "passport-facebook";
import dotenv from "dotenv";

import User from "../../models/user.js";

dotenv.config();

const {FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET, FACEBOOK_CALLBACK_URL} = process.env;

const facebookParams = {
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: FACEBOOK_CALLBACK_URL,
};

const facebookCallback = async (req, accessToken, refreshToken, profile, done) => {
    try {
        const {email, displayName} = profile;
        console.log(profile);
        const user = await User.findOne({email});
        if(user) {
           return  done(null, user);
        }
        const newUser = await User.create({email, name: displayName});
        done(null, newUser);
    } catch (error) {
        done(error, false);
    }
};

const FacebookStrategy = passportFacebook.Strategy;

const facebookStrategy = new FacebookStrategy(facebookParams, facebookCallback);

export default facebookStrategy;