/**
 *
 * In this kata, we will make a function to test whether a period is late.
 *
 * Our function will take three parameters:
 *
 * last - The Date object with the date of the last period
 *
 * today - The Date object with the date of the check
 *
 * cycleLength - Integer representing the length of the cycle in days
 *
 * If the today is later from last than the cycleLength, the function should return true.
 * We consider it to be late if the number of passed days is larger than the cycleLength.
 * Otherwise return false.
 */

// Test Case
// Test.assertEquals(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35), false);
// Test.assertEquals(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28), true);

// 题目的意思是，给定三个参数，日期起始时间，日期的结束时间，周期
// 起始时间在上个周期内，判断结束时间是否在下一个周期内，如果在，返回false，如果不在，返回true

/**
 * last，today都是日期时间对象，cycleLength是整数
 * @param last
 * @param today
 * @param cycleLength
 * @returns {boolean}
 */
function periodIsLate(last, today, cycleLength) {
    // last，today都是日期时间对象，可以直接相减，得到的是毫秒数
    // 将毫秒数换算为天数
    var delayDays = (today - last) / (24 * 3600 * 1000) ;
    // 判断delayDays与周期的大小，就可以得知today是否在下一个周期内
    return delayDays > cycleLength ? true : false ;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35))
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28))