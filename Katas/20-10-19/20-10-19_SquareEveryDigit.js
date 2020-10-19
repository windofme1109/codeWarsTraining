/**
 *
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

 * For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

 * Note: The function accepts an integer and returns an integer
 *
 *
 */

/**
 *
 * 将数字中的每一位数，平方后，连接起来，例如：9119 --> 811181， 161 --> 1361
 *
 */

function squareDigits(num) {
   let numStr = ('' + num).split('');
   let retArr = numStr.map(item => {
       return (1 * item) ** 2;
   });

   return 1 * retArr.join('');

}

const ret = squareDigits(9119);
console.log(ret);