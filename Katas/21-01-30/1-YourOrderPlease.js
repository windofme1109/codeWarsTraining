/**
 *
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
 *
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 *
 * If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
 *
 *
 */


// function order(words) {
//     if (words.trim() === '') {
//         return words;
//     }
//     const wordsWithNum = words.split(' ').map(item => {
//         let order = item.replace(/[^1-9]/g, '');
//
//         return {
//             order,
//             word: item
//         }
//     });
//
//     const sortedWord = wordsWithNum.sort((a, b) => {
//         return a.order * 1 - b.order * 1
//     }).map(item => {
//         return item.word;
//     });
//
//     return sortedWord.join(' ');
// }

/**
 *
 * @param words
 */
function order(words) {
    if (words.trim() === '') {
         return words;
    }
    // 根据空格拆分数组
    // 进行排序，是正则提取出字符串中的数字，根据数字大小进行排序
    const wordsWithNum = words.split(' ').sort((a, b) => {
        return a.match(/\d+/g)[0] - b.match(/\d+/g)[0];
    }).join(' ');

    return wordsWithNum;
}

console.log(order('is2 Thi1s T4est 3a'));