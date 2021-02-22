/**
 *
 *
 * Given: an array containing hashes of names
 *
 * Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
 *
 * Example:
 *
 *  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
 * // returns 'Bart, Lisa & Maggie'
 *
 * list([ {name: 'Bart'}, {name: 'Lisa'} ])
 * // returns 'Bart & Lisa'
 *
 * list([ {name: 'Bart'} ])
 * // returns 'Bart'
 *
 * list([])
 * // returns ''
 *
 */

/**
 * 格式化字符串
 * @param names
 * @returns {string|*}
 */
// function list(names) {
//     if (names.length === 0) {
//         return '';
//     } else if (names.length === 1) {
//         return names[0].name;
//     }
//
//     const nameArr = names.map((item, index) => {
//         if (index === names.length - 1) {
//             return ` & ${item.name}`;
//         }
//         return item.name;
//     });
//
//
//     return nameArr.length === 2 ? nameArr.join('') : (nameArr.slice(0, nameArr.length - 1).join(', ') + nameArr[nameArr.length - 1]);
//
// }

/**
 * reduce() 实现格式化字符串
 * @param names
 * @returns {*}
 */
// function list(names) {
//     const ret = names.reduce((acc, ele, index, array) => {
//         if (index === 0) {
//             return ele.name;
//         }
//
//         if (index === array.length - 1) {
//             return acc + ' & ' + ele.name;
//         }
//
//         return acc + ', ' + ele.name;
//
//     }, '');
//
//     return ret;
// }

/**
 * 使用正则实现
 * @param names
 * @returns {string}
 */
function list(names) {
    // /(.+),\s(.+)/ 正则表达式的意思是：以逗号和空格为分隔符（, ），通过最后一个逗号和空格的分隔符拿到最后一个 name 和前面的内容
    // 必须使用分组，+表示至少出现一次，即尽可能多的匹配
    const nameArr = names.map((item, index) => {
        return item.name;
    }).join(', ').replace(/(.+),\s(.+)/, '$1 & $2');

    return nameArr;
}


console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
console.log(list([ {name: 'Bart'}, {name: 'Lisa'}]));
console.log(list([ {name: 'Bart'}]));
console.log(list([]));


// const str = 'Bart, Lisa, Maggie';
//
// let pattern = /(.+),\s(.+)/;
// let ret = str.match(pattern);
//
// console.log(ret);
// console.log(str.replace(/(.+),\s(.+)/, '$1 & $2'));