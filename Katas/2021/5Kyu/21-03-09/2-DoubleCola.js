/**
 *
 * Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.
 *
 * For example, Penny drinks the third can of cola and the queue will look like this:
 *
 * Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
 * Write a program that will return the name of the person who will drink the n-th cola.
 *
 * Input:
 * The input data consist of an array which contains at least 1 name, and single integer n which may go as high as the biggest number your language of choice supports (if there's such limit, of course).
 *
 * Output / Examples:
 * Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.
 *
 * whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
 * whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
 * whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"
 *
 *
 */

/**
 * 找规律
 * 简单的说，就是一个队列，每出队一个元素，就在其末尾增加两个相同的元素，求队列的第 n 个元素
 * 初始队列的长度为 l，元素为s1，s2，... sl，那么周期规律是：
 * p:  0 |      1       |               2
 * s1：1 | l + 1  l + 2 | 3l + 1  3l + 2  3l + 3  3l + 4
 * s2：2 | l + 3  l + 4 | 3l + 5  3l + 6  3l + 7  3l + 8
 * s3：3 | l + 5  l + 6 | 3l + 9  3l + 10  3l + 11  3l + 12
 * ...
 * sl: l | l + 2l - 1  l + 2l | 3l + 4l - 3  3l + 4l - 2  3l + 4l - 1  3l + 4l
 * p 表示第几阶段
 * 那么首要任务是根据 n 找到 p
 * 临界点 init 是：l 3l 7l 15l ...
 * 改写一下：l | l + 2l | l + 2l + 4l | l + 2l + 4l + 8l
 * 判断条件是：临界点 >= n
 * 由于判断条件是临界点大于 r，所以我们必须减去当前阶段的增量 init - 2l * 2^p
 * rest = n - (init - 2l * 2^p) 表示去除增量后，就是当前阶段每个元素的在队列位置
 *
 *
 * p:  0 |  1   |     2
 * s1：1 | 1  2 | 1  2  3  4
 * s2：2 | 3  4 | 5  6  7  8
 * s3：3 | 5  6 | 9  10 11 12
 * ...
 * sl: l | 2l - 1  2l | 3l - 3  3l - 2  3l - 1  3l
 *
 * 要判断队列中的第几个元素是 s1、s2 ... 中的哪个，计算 rest / 2^(p + 1) 的除数
 * 即为索引
 *
 *
 * @param names
 * @param r
 * @returns {*}
 */
function whoIsNext(names, r){

    if (names.length >= r) {
        return names[r-1];
    }

    let initial = names.length;
    let step = 2 * names.length;
    let round = -1;

    // 根据临界点判断 r 处于第几个周期
    while (initial <= r) {
        round += 1;
        initial += step * Math.pow(2, round);
        if (initial === r) {
            return names[names.length - 1];
        }
    }

    // 由于判断条件是临界点大于 r，所以我们必须减去当前阶段的增量
    let rest = r - (initial - step * Math.pow(2, round));
    round += 1;
    const quotient = rest / Math.pow(2, round);
    const remainder = rest % Math.pow(2, round);
    if (remainder === 0) {
        return names[quotient - 1];
    } else {
        return names[Math.floor(quotient)];
    }
}

// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 5));
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 6));
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 13));
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 10));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 15));
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 6));