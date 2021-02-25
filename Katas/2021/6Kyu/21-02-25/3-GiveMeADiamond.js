/**
 *
 * Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
 *
 * Task
 * You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
 *
 * Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
 *
 * Examples
 * A size 3 diamond:
 *
 *   *
 *  ***
 *   *
 * ...which would appear as a string of " *\n***\n *\n"

 * A size 5 diamond:

 *    *
 *   ***
 *  *****
 *   ***
 *    *
 * ...that is:
 *
 * "  *\n ***\n*****\n ***\n  *\n"
 *
 */

function diamond(n){
    if (n < 0 || n % 2 === 0) {
        return null;
    }

    const halfDiamond = [];
    for (let i = 1; i <= n; i = i + 2) {
        let line = ' '.repeat((n - i) / 2) + '*'.repeat(i) + ' '.repeat((n - i) / 2);
        halfDiamond.push(line);
    }
    const diamond = halfDiamond.concat(halfDiamond.slice(0, halfDiamond.length - 1).reverse());

    return diamond.length === 1 ? diamond[0] + '\n' : diamond.join('\n');
}

console.log(diamond(3) === ' *\n***\n *\n');
console.log(diamond(3));
// console.log('----------------------');
// console.log(diamond(5));
// console.log('----------------------');
// console.log(diamond(7));

console.log('----------------------');
console.log(' *\n***\n *\n');
