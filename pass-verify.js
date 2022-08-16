const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$J6xT4M5tXe7LmapqryQ5O..9R59zvk03Wsm.ccF/2ZkiRDeFhBZQS';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
