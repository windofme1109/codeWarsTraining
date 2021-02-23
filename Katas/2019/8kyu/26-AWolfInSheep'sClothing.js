/**
 *
 * A wolf in sheep's clothing
 * Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
 *
 * Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
 * [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
 *    7      6      5      4      3            2      1
 * If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
 *
 * Note: there will always be exactly one wolf in the array.
 *
 * Examples:
 * warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"
 *
 * warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"
 *
 */

// Test Case
// describe("Sample tests", function() {
//   it("Tests", function() {
//     Test.assertEquals(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]), "Oi! Sheep number 2! You are about to be eaten by a wolf!");
//     Test.assertEquals(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!");
//     Test.assertEquals(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");
//     Test.assertEquals(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
//     Test.assertEquals(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
//   });
// });

// 第一版：使用数组的indexof()
/**
 * 披着羊皮的狼
 * 根据狼的位置，作出不同的行动
 * 狼的位置如果在数组的最后一位，直接暴露在牧羊人的面前，则返回：Pls go away and stop eating my sheep
 * 狼的位置如果不在数组的最后一位，则不会直接暴露在牧羊人的面前，则返回：Oi! Sheep number n! You are about to be eaten by a wolf!
 * n表示狼前面的羊的位置，从右向左开始数羊，且从1开始，数到狼的前面
 * @param queue
 */
// function warnTheSheep(queue) {
//     var maxIndex = queue.length - 1 ;
//     // 找到狼的位置
//     var wolfLoc = queue.indexOf('wolf') ;
//     if (wolfLoc === maxIndex) {
//         return 'Pls go away and stop eating my sheep' ;
//     } else {
//         // 最大的索引减去狼的所在位置的索引，就是狼前面的羊的位置（从右向左数，且从1开始）
//         let sheepLocBeforeWolf = maxIndex - wolfLoc ;
//         return `Oi! Sheep number ${sheepLocBeforeWolf}! You are about to be eaten by a wolf!` ;
//     }
// }

// 第二版：使用for循环
function warnTheSheep(queue) {
    var sheepCountBeforeWolf = 0 ;
    // 注意for循环的顺序
    for (let i = queue.length - 1; i >= 0; i--) {
        if (queue[i] === 'wolf') {
            if (i === queue.length - 1) {
                return 'Pls go away and stop eating my sheep' ;
            } else {
                return `Oi! Sheep number ${sheepCountBeforeWolf}! You are about to be eaten by a wolf!`
            }

        }
        // 每次迭代，只有不是狼，羊的数量就加1
        sheepCountBeforeWolf++ ;
    }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])) ;
console.log(warnTheSheep(["sheep", "sheep", "wolf",  "sheep", "sheep", "sheep", "sheep", "sheep"])) ;
console.log(warnTheSheep(["sheep", "sheep",  "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"])) ;