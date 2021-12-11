const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5).then((hash) => {
  console.log(hash);
  bcrypt.compare(password, hash).then((result) => {
    console.log(result);
  });
});
