const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
const JwtfStrategy = require('./strategies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtfStrategy);
