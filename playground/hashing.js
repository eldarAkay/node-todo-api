const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
    id: 10
};

const data2 = {
    id: 11
};

const token = jwt.sign(data, '123abc!');
console.log(token);

const token2 = jwt.sign(data2, '123abc!');
console.log(token2);

const decoded = jwt.verify(token, '123abc!');
console.log(decoded);

const decoded2 = jwt.verify(token2, '123abc!');
console.log(decoded2);

