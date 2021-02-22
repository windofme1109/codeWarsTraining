/**
 *
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
 *
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 *
 * 一个句子出现 a-z 这 26 个字母一次，就被称为 pangram
 *
 */

function isPangram(string) {
    const wordStr = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
    console.log(wordStr)

    // 去重
    const letterSet = new Set([...wordStr]);

    return [...letterSet].length === 26 ? true : false;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'));