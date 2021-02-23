/**
 *
 * An NBA game runs 48 minutes (Four 12 minute quarters).
 * Players do not typically play the full game, subbing in and out as necessary.
 * Your job is to extrapolate a player's points per game if they played the full 48 minutes.
 *
 * Write a function that takes two arguments,
 * ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
 *
 * Examples:
 *
 * pointsPer48(12, 20) // 28.8
 * pointsPer48(10, 10) // 48
 * pointsPer48(5, 17) // 14.1
 * pointsPer48(0, 0) // 0
 * Notes:
 * All inputs will be either be an integer or float.
 * Follow your dreams!
 */

// Test Case
// describe("Solution", () => {
//   it("should test for something", () => {
//     Test.assertEquals(pointsPer48(12, 20), 28.8)
//     Test.assertEquals(pointsPer48(10, 10), 48.0)
//     Test.assertEquals(pointsPer48(5, 17), 14.1)
//     Test.assertEquals(pointsPer48(0, 0), 0)
//     Test.assertEquals(pointsPer48(30.8, 34.7), 42.6)  // Russell Westbrook 1/15/17
//     Test.assertEquals(pointsPer48(22.9, 33.8), 32.5)  // Kemba Walker 1/15/17
//   });
// });

/**
 * 根据每场比赛的平均得分和平均上场时间，换算出上场时间为48分钟的得分
 * 结果保留一位小数
 * @param ppg
 * @param mpg
 */
function pointsPer48(ppg, mpg) {
    if (mpg === 0) {
        return 0 ;
    } else {
        var ret = (ppg / mpg) * 48 ;
        // toFixed()转换的结果是字符串，结果要求是数字，因此需要转换
        return Number(ret.toFixed(1)) ;
    }
}

console.log(pointsPer48(12, 20))
console.log(pointsPer48(10, 10))
console.log(pointsPer48(30.8, 34.7))