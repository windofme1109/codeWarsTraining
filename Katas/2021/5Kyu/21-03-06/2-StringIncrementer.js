/**
 *
 * Your job is to write a function which increments a string, to create a new string.
 *
 * If the string already ends with a number, the number should be incremented by 1.
 * If the string does not end with a number. the number 1 should be appended to the new string.
 * Examples:
 *
 * foo -> foo1
 *
 * * foobar23 -> foobar24
 *
 * foo0042 -> foo0043
 *
 * foo9 -> foo10
 *
 * foo099 -> foo100
 *
 * Attention: If the number has leading zeros the amount of digits should be considered.
 *
 */


function incrementString (strng) {

    if (strng === '') {
        return '1';
    }

    return strng.replace(/([a-zA-Z]*)([0-9]*)/, function (match, $1, $2) {
        console.log($1, $2);
        if (!$2) {
            $2 = '0';
        }

        if (!$1) {
            $1 = '';
        }
        const num = String(parseInt($2) + 1);
        let increment = num.length < $2.length ? num.padStart($2.length, '0') : num;

        return $1 + increment;

    });
}


// console.log(incrementString('foo099'));
// console.log(incrementString('foo9'));
console.log(incrementString('foobar001'));
console.log(incrementString('foo'));
console.log(incrementString('1'));
console.log(incrementString('009'));