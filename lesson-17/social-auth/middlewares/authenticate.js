import passport from "passport";

import {googleStrategy, facebookStrategy} from './auth-strategies/index.js';

passport.use("google", googleStrategy);
passport.use("facebook", facebookStrategy);

export default passport;