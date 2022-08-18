const jwt = require('jsonwebtoken');

const secret = 'mycat';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY2MDgzNTUxMX0.0RXgvOFMirtFiatJY7OYZWr2fh_iFKRDQwumIRFnonU';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
