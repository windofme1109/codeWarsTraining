/**
 *
 * Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
 *
 * For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
 *
 * As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
 *
 * If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
 *
 */

function firstNonRepeatingLetter(s) {
    // Add your code here
    let lowerCaseStr = s.toLowerCase();
    // 统计字符串中每个字符出现的次数
    let repeatCount = lowerCaseStr.split('').reduce((acc, ele) => {
        if (acc[ele]) {
            acc[ele] += 1;
        } else {
            acc[ele] = 1;
        }


        return acc;
    }, {});
    const nonRepeatingIndex = [];
    // 拿到不重复的字符的索引
    for (let key of Object.keys(repeatCount)) {
        if (repeatCount[key] === 1) {
            nonRepeatingIndex.push(lowerCaseStr.indexOf(key));
        }
    }

    // 排序，得到最小的索引
    nonRepeatingIndex.sort((a, b) => a - b);

    return nonRepeatingIndex[0] === undefined ?  '' : s[nonRepeatingIndex[0]]
}

/**
 * 优化版本 - 使用 indexOf() 和 lastIndexOf()
 * @param s
 * @returns {string|*}
 */
function firstNonRepeatingLetter(s) {
    let lowerCaseStr = s.toLowerCase();

    for (let i = 0; i < lowerCaseStr.length; i++) {
        // 对于一个全部是小写的字符串，对于一个字符而言，正向查找和反向查找的的索引是一样的，说明这个字符没有重复
        if (lowerCaseStr.indexOf(lowerCaseStr[i]) === lowerCaseStr.lastIndexOf(lowerCaseStr[i])) {
            return s[i];
        }
    }

    return '';
}

function firstNonRepeatingLetter(s) {
    for (let i = 0; i < s.length; i++) {
        // 使用正则，根据每个字符，从 s 中提取所有相同的字符
        // 使用 RegExp 构造函数，可以接收一个字符串，生成一个正则表达式
        let pattern = new RegExp(s[i], 'ig');
        if (s.match(pattern).length === 1) {
            return s[i];
        }

    }

    return '';
}


console.log(firstNonRepeatingLetter('asssffeeaggsgr'));
console.log(firstNonRepeatingLetter('sTreSS'));