/**
 *
 * You live in the city of Cartesia where all roads are laid out in a perfect grid.
 * You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
 * The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
 * You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
 *
 * Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
 *
 *
 * Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
 * Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
 * Test.expect(!isValidWalk(['w']), 'should return false');
 * Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
 *
 */

/**
 * 方法 1 使用 reduce() 得到每个字符的重复次数
 * 然后判断 n == s 和 e === w
 * @param walk
 * @returns {boolean}
 */
// function isValidWalk(walk) {
//     //insert brilliant code here
//     if (walk.length !== 10) {
//         return false;
//     }
//
//     let obj = walk.reduce((arr, d) => {
//         if (arr[d]) {
//             arr[d] += 1;
//         } else {
//             arr[d] = 1;
//         }
//
//         return arr;
//     }, {});
//
//
//     const keys = Object.keys(obj);
//     console.log(keys);
//     if (keys.length === 4) {
//         if ((obj['w'] === obj['e']) && (obj['n'] === obj['s'])) {
//             return true;
//         } else {
//             return false;
//         }
//
//     } else if (keys.length === 2) {
//         if ((obj['w'] && obj['e']) && (obj['w'] === obj['e'])) {
//             return true;
//         } else if ((obj['n'] && obj['s']) && (obj['n'] === obj['s'])) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
// }

/**
 * 方法 2
 * 由于元素是已知的，那么我们直接就统计 n s w e 出现的次数既可
 * 判断 n === s 和 e === w
 * @param walk
 * @returns {boolean}
 */
function isValidWalk(walk) {

    // 定义一个对象，用来统计 n s w e 出现的次数
    // 默认值为 0
    const ret = {
        e: 0,
        n: 0,
        s: 0,
        w: 0
    }

    walk.forEach(item => {
        ret[item] += 1;
    });


    return walk.length === 10 && ret.e === ret.w && ret.n === ret.s;
}


console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));