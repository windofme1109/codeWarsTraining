/**
 *
 * The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
 *
 * If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
 *
 * If
 *
 * sz is <= 0 or if str is empty return ""
 * sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
 * Examples:
 * revrot("123456987654", 6) --> "234561876549"
 * revrot("123456987653", 6) --> "234561356789"
 * revrot("66443875", 4) --> "44668753"
 * revrot("66443875", 8) --> "64438756"
 * revrot("664438769", 8) --> "67834466"
 * revrot("123456779", 8) --> "23456771"
 * revrot("", 8) --> ""
 * revrot("123456779", 0) --> ""
 * revrot("5630 0065 5734 4694 85", 4) --> "0365 0650 7345 6944"
 *
 *
 */

function revrot(str, sz) {

    if (sz === 0 || sz > str.length) {
        return '';
    }

    // 分组
    let groups = [];

    for (let i = 0; i < Math.floor(str.length / sz); i++) {
        groups.push(str.slice(i * sz, (i + 1) * sz));
    }

    console.log(groups);

    let ret = groups.map(num => {
        let digitSum = num.split('').reduce((acc, ele) => {
            return acc + Math.pow(ele * 1, 3);
        }, 0);

        if (digitSum % 2 === 0) {
            return num.split('').reverse().join('');
        } else {
            return num.slice(1) + num.slice(0, 1);
        }

    });

    return ret.join('');

}

// console.log(revrot('1234567890', 4));
// console.log(revrot("123456987654", 6)  === '234561876549');
// console.log(revrot("123456987654", 6));
console.log(revrot("733049910872815764", 5));
// console.log(revrot("66443875", 4) === '44668753');