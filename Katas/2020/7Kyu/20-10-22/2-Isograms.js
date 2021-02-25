/**
 *
 *
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 * Implement a function that determines whether a string that contains only letters is an isogram.
 * Assume the empty string is an isogram. Ignore letter case.

 * isIsogram("Dermatoglyphics") == true
 * isIsogram("aba") == false
 * isIsogram("moOse") == false // -- ignore letter case
 *
 */

/**
 *
 * 没有重复字母的单词，就被称为 isogram
 *
 *
 */

function isIsogram(str) {

    if (typeof str !== 'string') {
        return;
    }

    const strArr = str.toLowerCase().split('');
    let repeatCount = 0;
    strArr.forEach((item, index) => {
        if (strArr.indexOf(item, index + 1) !== -1) {
            repeatCount++;
        }
    })

    if (repeatCount > 0) {
        return false;
    }

    return true;
}


// 解法 2 使用 Set 去重
function isIsogramTest(str) {

    if (typeof str !== 'string') {
        return;
    }

    return (new Set(str)).size === str.length;
}



// 解法 3 使用正则
function isIsogramTestReg(str) {

    if (typeof str !== 'string') {
        return;
    }

    const pattern = /([a-z]).*\1/ig;
    const ret = str.match(pattern);
    console.log(ret);
}


console.log(isIsogram('apple'));
console.log(isIsogram('study'));

console.log(isIsogramTest('apple'));
console.log(isIsogramTest('study'));
console.log(isIsogramTest('green'));
console.log(isIsogramTest('banana'));

isIsogramTestReg('study');
isIsogramTestReg('banana');
isIsogramTestReg('green');