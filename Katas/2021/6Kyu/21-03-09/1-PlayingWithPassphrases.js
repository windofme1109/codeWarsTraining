/**
 *
 * Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:
 *
 * choose a text in capital letters including or not digits and non alphabetic characters,
 *
 * shift each letter by a given number but the transformed letter must be a letter (circular shift),
 * replace each digit by its complement to 9,
 * keep such as non alphabetic and non digit characters,
 * downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
 * reverse the whole result.
 * Example:
 * your text: "BORN IN 2015!", shift 1
 *
 * 1 + 2 + 3 -> "CPSO JO 7984!"
 *
 * 4 "CpSo jO 7984!"
 *
 * 5 "!4897 Oj oSpC"
 *
 * With longer passphrases it's better to have a small and easy program. Would you write it?
 *
 */

function playPass(s, n) {
    const transformWords = s.split(' ').map(item => {
        return transform(item, n);
    }).join(' ');

    const lowerCase = transformWords.split('').map((char, index) => {
        if (/[A-Z]/.test(char) && index % 2 === 1) {
            return char.toLowerCase();
        }

        return char;
    }).join('');
    return lowerCase.split(' ').map(item => {
        return item.split('').reverse().join('');
    }).reverse().join(' ');

}

function transform(str, n) {
    return str.split('').map((char, index) => {

        if (/[A-Z]/.test(char)) {
            let code = char.charCodeAt(0) + n;
            code = code > 90 ? (code - 26) : code;
            return String.fromCharCode(code);
        }
        if (/[0-9]/.test(char)) {
            return 9 - (char * 1);
        }
        return char;
    }).join('');
}

console.log(playPass('BORN IN 2015!', 1));
