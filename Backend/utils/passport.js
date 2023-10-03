import passport  from 'passport';
import  Google from 'passport-google-oauth20';
const GoogleStrategy = Google.Strategy;
const GOOGLE_CLIENT_ID = "1080011666773-255ndmqqc19m4eh1v34cbkp6n9bqokvg.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
},
    //   function(accessToken, refreshToken, profile, cb) {
    //     User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //       return cb(err, user);
    //     });
    //   }
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.serializeUser((user, done)=>{
    done(null, user);
});

passport.deserializeUser((user, done)=>{
    done(null, user);
})

export default passport