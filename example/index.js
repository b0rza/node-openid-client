'use strict';

const Issuer = require('..').Issuer;

const ISSUER = process.env.ISSUER
|| 'http://openid.provider.local:3000'
|| 'https://guarded-cliffs-8635.herokuapp.com';
const port = process.env.PORT || 3001;

const appFactory = require('./app');

// Issuer.discover(ISSUER).then((issuer) => {
//   const app = appFactory(issuer);
//   app.listen(port, () => console.log(`Client running on port ${port}`));
// }).catch((err) => {
//  console.log(err);
//  process.exit(1);
// });

const oncourseIssuer = new Issuer({
  issuer: 'http://openid.provider.local:3000/op',
  authorization_endpoint: 'http://openid.provider.local:3000/op/auth',
  token_endpoint: 'http://openid.provider.local:3000/op/token',
  userinfo_endpoint: 'http://openid.provider.local:3000/op/me',
  jwks_uri: 'http://openid.provider.local:3000/op/certs',

  check_session_iframe: "http://openid.provider.local:3000/op/session/check",
  end_session_endpoint: "http://openid.provider.local:3000/op/session/end",
  registration_endpoint: "http://openid.provider.local:3000/op/reg",
  token_introspection_endpoint: "http://openid.provider.local:3000/op/token/introspection",
  token_revocation_endpoint: "http://openid.provider.local:3000/op/token/revocation",
}); // => Issuer
console.log('Set up issuer %s', oncourseIssuer);

const app = appFactory(oncourseIssuer);

app.listen(port, (err) => {
  if (err) { console.log(err); process.exit(1); }
  console.log(`Client running on port ${port}`)
});
