/**
 *
 * A person's Life Path Number is calculated by adding each individual number in that person's date of birth, until it is reduced to a single digit number.
 *
 * Complete the function that accepts a date of birth (as a string) in the following format: "yyyy-mm-dd". The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.
 *
 * You do not need to check that the input is correct format, you can assume that it will always be a valid date (as a string) with given format.
 *
 * Example
 * For example, Albert Einstein's birthday is March 14, 1879 ("1879-03-14"). The calculation of his Life Path Number would look like this:
 *
 * year  :  1 + 8 + 7 + 9 = 25  -->  2 + 5 = 7
 * month :  0 + 3 = 3
 * day   :  1 + 4 = 5
 * result:  7 + 3 + 5 = 15  -->  1 + 5 = 6
 * Einstein's Life Path Number is therefore: 6
 *
 */

function lifePathNumber(dateOfBirth) {
    // Your solution...
    let num = dateOfBirth.split('-').map(item => item * 1);
    let year = digitSum(num[0]);
    let month = digitSum(num[1]);
    let day = digitSum(num[2]);


    let lifenum = digitSum(year + month + day);


    return lifenum;
}

function digitSum(num) {

    let ret = ('' + num).split('').reduce((acc, cur) => {
        return acc + cur * 1;
    }, 0);
    if (ret > 9) {
       return digitSum(ret);
    } else {
        return ret;
    }

}

console.log(lifePathNumber('1879-03-14'))
console.log(lifePathNumber('1815-12-10'))
console.log(lifePathNumber('1961-07-04'))
console.log(lifePathNumber('1955-10-28'))
// console.log(digitSum(1))