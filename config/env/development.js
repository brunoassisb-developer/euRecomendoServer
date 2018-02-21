'use strict';

/**
 * Expose
 */

module.exports = {
  db: 'mongodb://admin:admin123@ds219098.mlab.com:19098/eurecomendo',
  facebook: {
    clientID: '176369322980443',
    clientSecret: '0b22968ab175f065d301ed17b5169bd1',
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  /*twitter: {
    clientID: process.env.TWITTER_CLIENTID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
  },
  github: {
    clientID: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_CLIENTID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: 'http://localhost:3000/auth/linkedin/callback'
  },*/
  google: {
    clientID: '196352292341-kfssufhecbp9omal5mm7s477pp86mnmn.apps.googleusercontent.com',
    clientSecret: 'UHL5w_pBz9qc-OWeXJWPHnqr',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  }
};
