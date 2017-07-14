// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1759191951038830', // your App ID
        'clientSecret'    : '7907f1d233987dc04a29a114a3e5e18b', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    
    'googleAuth' : {
        'clientID'         : '104124424073-2ipuc8l6megq7gvtct51lhc7d7o49g1o.apps.googleusercontent.com',
        'clientSecret'     : 'AALikP4OwGBb4XP8oT8rRbN6',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
