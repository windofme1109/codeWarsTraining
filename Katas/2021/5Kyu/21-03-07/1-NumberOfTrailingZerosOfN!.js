/**
 *
 * Write a program that will calculate the number of trailing zeros in a factorial of a given number.
 *
 * N! = 1 * 2 * 3 * ... * N
 *
 * Be careful 1000! has 2568 digits...
 *
 * For more info, see: http://mathworld.wolfram.com/Factorial.html
 *
 * Examples
 * zeros(6) = 1
 * # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
 *
 * zeros(12) = 2
 * # 12! = 479001600 --> 2 trailing zeros
 * Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros
 *
 *
 */

/**
 * 阶乘的数字中，末尾有多少个 0
 * 一个数字可以写成 m * 10^k，其中 m 是不能被 10 整除的数字
 * 例如：40 = 4 * 10，1200 = 12 * 10 * 10
 * 也就是说，一个数字中，零的数量取决于 10 的数量
 * 而 10 = 2 * 5，在一个自然数的因数中，2 增长的速度远远快于 5，因此，我们只需要统计 5 的数量
 * 即因数中每出现一次 5（或者 5 的倍数），前面就一定会出现一个 2（偶数）
 * 放到阶乘这里，以 125! 为例，125! = 1 * 2 * 3 *4 ... * 100 * 101 ... * 124 * 125
 * 每隔 5 个数，一定会出现一个 5，即 5 的倍数，因此一共有 20 个，如下所示：
 * 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 105 110 115 120 125，
 * 按照上面的道理，在上面的这一串数字是，每个 5 个又会出现产生一个 10 的数字，即：
 * 25 50 75 100
 * 什么意思呢，就是
 * 25 = 5 * 5
 * 50 = 25 * 2 = 5 * 5 * 2
 * 75 = 25 * 3 = 5 * 5 * 3
 * 100 = 25 * 4 = 5 * 5 * 4
 * 125 = 25 * 5 = 5 * 5 * 5
 * 每个数字都包含了至少两个 5，因此至少会产生两个 10
 * 而我们第一遍筛选，只是将这些自然数中的第一个因数 5 筛选出去了，第二个及后面的因数 5 并没有筛选出来
 * 所以我们还需要继续筛选
 * 同理，因为第二次筛选出来的够 5 个，因此还能进行筛选：
 * 125
 * 即 125 = 5 * 5 * 5
 * 所以 125! 末尾的 0 的个数为：20 + 5 + 1 = 26
 * 总结：对于 n!，分别计算 n 中包含 5、25、125 ... 的个数，然后求和，就是 n! 末尾包含的 0 的个数
 *
 */



/**
 *
 * 解法 1 就是直接统计 n 中包含 5、25、125 ... 的个数，然后求和
 * @param n
 * @returns {number}
 */
function zeros (n) {
    let res = 0;
    let base = 5;

    while (n >= base) {
        res += Math.floor(n / base);

        base = base * 5;
    }

    return res;
}

/**
 * 解法 2 过滤法，第一次过滤出至少包含一个因数 5 的个数，然后从这些因数中继续过滤，直到小于 5 为止
 * @param n
 * @returns {number}
 */
function zeros(n) {
    let res = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        res += n;
    }

    return res;
}
console.log(zeros(6));
console.log(zeros(10));
console.log(zeros(0));
console.log(zeros(30));
console.log(zeros(100));
console.log(zeros(10000));
