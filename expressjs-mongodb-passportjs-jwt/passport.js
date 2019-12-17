const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { Strategy: LocalStrategy } = require('passport-local');
const User = require('./models/user');

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  User.authenticate(),
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'ILovePokemon',
  },
  async (jwtPayload, cb) => {
    // find the user in db if needed.
    // This functionality may be omitted if you store everything you'll need in JWT payload.
    try {
      const user = await User.findById(jwtPayload.id);
      return cb(null, user);
    } catch (error) {
      return cb(error);
    }
  },
));
