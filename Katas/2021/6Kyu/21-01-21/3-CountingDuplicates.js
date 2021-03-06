/**
 *
 * Count the number of Duplicates
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 *
 * Example
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 *
 */

/**
 * 计算一个字符中重复的字符的个数
 * @param text
 * @returns {number}
 */
function duplicateCount(text){

    const charArr = text.toLowerCase().split('');
    let obj = charArr.reduce((arr, d) => {
        if (arr[d]) {
            arr[d] += 1;
        } else {
            arr[d] = 1;
        }

        return arr;
    }, {});

    let count = 0;

    for (let key in obj) {
        if (obj[key] > 1) {
            count += 1
        }
    }

    return count;
}


console.log(duplicateCount("aA11"));
console.log(duplicateCount("indivisibility"));
