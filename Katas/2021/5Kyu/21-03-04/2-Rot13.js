/**
 *
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
 * ROT13 is an example of the Caesar cipher.
 *
 * Create a function that takes a string and returns the string ciphered with Rot13.
 * If there are numbers or special characters included in the string, they should be returned as they are.
 * Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 *
 *
 * 套用ROT13到一段文字上仅仅只需要检查字元字母顺序并取代它在13位之后的对应字母，有需要超过时则重新绕回26英文字母开头即可。
 * A换成N、B换成O、依此类推到M换成Z，然后序列反转：N换成A、O换成B、最后Z换成M。
 * 只有这些出现在英文字母里头的字元受影响；数字、符号、空白字元以及所有其他字元都不变。
 * 因为只有在英文字母表里头只有26个，并且26=2×13，ROT13函数是它自己的逆反。
 *
 */

/**
 * ROT13 加密 - 使用 ascii 码实现
 * @param message
 * @returns {string}
 */
function rot13(message){
    return message.split('').map(item => {
        if (/[a-z]/.test(item)) {
            let code = item.charCodeAt(0) + 13;
            code = code > 122 ? (code - 122) + 96 : code;

            return String.fromCharCode(code);
        } else if (/[A-Z]/.test(item)) {
            let code = item.charCodeAt(0) + 13;
            code = code > 90 ? (code - 90) + 64 : code;
            return String.fromCharCode(code);
        } else {
            return item;
        }
    }).join('');
}

function rot13(message) {
    let Code = {
        a: 'n', b: 'o', c: 'p', d: 'q', e: 'r', f: 's', g: 't', h: 'u', i: 'v', j: 'w', k: 'x', l: 'y', m: 'z',
        n: 'a', o: 'b', p: 'c', q: 'd', r: 'e', s: 'f', t: 'g', u: 'h', v: 'i', w: 'j', x: 'k', y: 'l', z: 'm',
        A: 'N', B: 'O', C: 'P', D: 'Q', E: 'R', F: 'S', G: 'T', H: 'U', I: 'V', J: 'W', K: 'X', L: 'Y', M: 'Z',
        N: 'A', O: 'B', P: 'C', Q: 'D', R: 'E', S: 'F', T: 'G', U: 'H', V: 'I', W: 'J', X: 'K', Y: 'L', Z: 'M',
    }

    return message.split('').map(item => {
        if (/[a-zA-Z]/.test(item)) {
            return Code[item];
        }

        return item;
    }).join('');
}

console.log(rot13(rot13('test test')));

