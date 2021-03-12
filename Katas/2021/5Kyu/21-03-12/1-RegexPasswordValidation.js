/**
 *
 * You need to write regex that will validate a password to make sure it meets the following criteria:
 *
 * At least six characters long
 * contains a lowercase letter
 * contains an uppercase letter
 * contains a number
 * Valid passwords will only be alphanumeric characters.
 *
 */

function validate(password) {
    if (/[^a-zA-Z0-9]/.test(password) || password.length < 6) {
        return false;
    } else {
        return /[A-Z]+/.test(password) && /[a-z]+/.test(password) && /[0-9]+/.test(password);
        // return /\w[a-z]+[A-Z]+[0-9]+/.test(password);
    }
}

// const pattern = /[a-z]+[A-Z]+[0-9]+/;
// console.log(pattern.test('aA0'));

console.log(validate('JHD5FJ53'));
console.log(validate('Password123'));
console.log(validate('djI38D55'));