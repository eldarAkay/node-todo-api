const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// const data = {
//     id: 10
// };
//
// const data2 = {
//     id: 11
// };
//
// const token = jwt.sign(data, '123abc!');
// console.log(token);
//
// const token2 = jwt.sign(data2, '123abc!');
// console.log(token2);
// const decoded = jwt.verify(token, '123abc!');
// console.log(decoded);
//
// const decoded2 = jwt.verify(token2, '123abc!');
// console.log(decoded2);
//


const password = '123';

// bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash(password, salt, function (err, hash) {
//         console.log(hash);
//     });
// });

const hashedPasswords = ['$2a$10$kCUiQPst4ZpfJBjG3f1H7OJk7lRxmF6O/QOKQuNWxL55mJS/SBbYq', '$2a$10$2ZRo/oPpaFyKOURQaJIQ5uDvAKKdZG7LvXjyprGQTld1Y4sSi/zUe', '$2a$10$3Q/wCIK/v/GTBXVRrXsIjezA.dpYvOhNfeo7zEfw7w7abUbXUGMuu']

bcrypt.compare(password, hashedPasswords[2], (err, res) => {
    console.log(res);
});