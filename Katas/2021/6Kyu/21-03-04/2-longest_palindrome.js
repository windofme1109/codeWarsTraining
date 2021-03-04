/**
 *
 * Longest Palindrome
 * Find the length of the longest substring in the given string s that is the same in reverse.
 *
 * As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
 *
 * If the length of the input string is 0, the return value must be 0.
 *
 * Example:
 * "a" -> 1
 * "aab" -> 2
 * "abcde" -> 1
 * "zzbaabcd" -> 4
 * "" -> 0
 *
 */

/**
 * 寻找字符串中最长的回文串
 * 方法 1：暴力寻找：将一个长度为 n 的字符串，将其拆分为长度为 1 2 3 ... n 的字符串，测试其是否为回文串
 * 时间复杂度是 O(n^2)
 * @param s
 * @returns {number}
 */
const longestPalindrome1 = function(s){

    if (s === '') {
        return 0;
    }
    let count = 0;
    const strArr = s.split('');
    let step = 1;
    let palindrome = [];

    while (step <= strArr.length) {
        for (let i = 0; i < (strArr.length - step + 1); i++) {
            let s = strArr.slice(i, i + step);
            console.log(s);
            let r = strArr.slice(i, i + step).reverse();
            if (s.join('') === r.join('')) {
                palindrome.push(s.join(''));
            }
            count++;
        }

        step++;
    }

    const palindromeLength = palindrome.map(item => {
        return item.length;
    });

    console.log(count);
    return Math.max(...palindromeLength);
}

/**
 * 优化：从第一个字符开始，依次与后面的进行拼接
 * 例如：abba：a ab abb abba，b bb bba，b ba，a
 * 总次数是：4 + 3 + 2 + 1 = 10
 * 优化的点在于：已经验证过的不再出现
 * @param s
 * @returns {number}
 */
const longestPalindrome = function(s) {
    let longestPalindrome = '';
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let temp = '';

        for (let j = i; j < s.length; j++) {
            // 每次从字符串的 i 位置开始拼接
            // 这样可以将所有长度（1 2 3 ... n）的字符串拼接起来
            temp += s.charAt(j);
            if (temp === temp.split('').reverse().join('') && temp.length > longestPalindrome.length) {
                longestPalindrome = temp;
            }
            count++;
        }
    }
    console.log(count);
    return longestPalindrome.length;

}
// longestPalindrome('abcde');
console.log(longestPalindrome('zzbaabcd'));
console.log(longestPalindrome1('zzbaabcd'));
// console.log(longestPalindrome('zzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcdzzbaabcd'));