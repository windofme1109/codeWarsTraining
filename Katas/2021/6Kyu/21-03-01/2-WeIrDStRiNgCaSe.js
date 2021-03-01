/**
 *
 * Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
 *
 * The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
 *
 * Examples:
 * toWeirdCase( "String" );//=> returns "StRiNg"
 * toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
 *
 *
 */

function toWeirdCase(string){
    return string.split(' ').map(item => {
        return item.split('').map((char, index) => {
            if (index % 2) {
                return char.toLowerCase();
            } else {
                return char.toUpperCase();
            }
        }).join('');
    }).join(' ');
}


/**
 * 对一个字符串中的单词进行转换，索引为偶数的大写，索引为奇数的小写
 * 优化-1：将嵌套的循环转换为一次循环
 * @param string
 * @returns {string}
 */
function toWeirdCase2(string){
    let index = 0;
    let str = '';

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (/^\w$/.test(char)) {
            if (index % 2) {
                str += char.toLowerCase();
            } else {
                str += char.toUpperCase();
            }
            index += 1;
        } else {
            str += char;
            index = 0;
        }

    }

    return str;


}


console.log(toWeirdCase('Weird string case sfdklsdf sdfklsd sdfjksdl asdfjsdkl asdasjklfg sdafjlsd asdfjsdkl asdfjksd asdfjkas asdfjkas asda asdajkl adasjkl fasjkf afasjkf afa adfajks afasdjk adasjkd afdasjkl adfaskf weioru qweruweo qwerqwu qwerqwori qweqwuio qweqw qweqwu qweuqwi qweuiq qweqwuil wqeqwev qweuio qweuiqw'));

console.log(toWeirdCase('Weird string case sfdklsdf sdfklsd sdfjksdl asdfjsdkl asdasjklfg sdafjlsd asdfjsdkl asdfjksd asdfjkas asdfjkas asda asdajkl adasjkl fasjkf afasjkf afa adfajks afasdjk adasjkd afdasjkl adfaskf weioru qweruweo qwerqwu qwerqwori qweqwuio qweqw qweqwu qweuqwi qweuiq qweqwuil wqeqwev qweuio qweuiqw'));


// console.log(toWeirdCase('String'));