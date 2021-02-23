/**
 * Terminal game move function
 * In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
 *
 * Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
 *
 * Example:
 * move(3, 6) should equal 15
 */

// Test Case
// describe('move function', () => {
//   it('basic tests', () => {
//     Test.assertEquals(move(0, 4), 8);
//     Test.assertEquals(move(3, 6), 15);
//     Test.assertEquals(move(2, 5), 12);
//   })
// })

/**
 * 一个英雄从一个位置出发，方向是从左向右，移动的距离是扔出的骰子的点数的二倍，
 * 这个函数的目的是根据初始位置（position），和点数，得到英雄的下一个位置
 * @param position
 * @param roll
 */
function move (position, roll) {
    // return the new position
    return position + roll * 2 ;
}

console.log(move(0, 4) === 8) ;
console.log(move(3, 6) === 15) ;
console.log(move(2, 5) === 12) ;