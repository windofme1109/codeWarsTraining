/**
 *
 * There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

 * input
 * customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
 * n: a positive integer, the number of checkout tills.
 * output
 * The function should return an integer, the total time required.
 *
 * queueTime([5,3,4], 1)
 * // should return 12
 * // because when there is 1 till, the total time is just the sum of the times
 *
 * queueTime([10,2,3,3], 2)
 * // should return 10
 * // because here n=2 and the 2nd, 3rd, and 4th people in the
 * // queue finish before the 1st person has finished.
 *
 * queueTime([2,3,10], 2)
 *  // should return 12
 *
 *
 */

/**
 * 计算排队的总时间
 * @param customers
 * @param n
 * @returns {*}
 */
// function queueTime(customers, n) {
//     if (n === 1) {
//         // 只有一个收银台，则时间就是队列中的值的总和
//         return customers.reduce((acc, ele) => acc + ele, 0);
//     }
//
//     if (n >= customers.length) {
//         // 收银台数量大于顾客数量，时间就是队列中的最大值
//         return Max(customers);
//     }
//
//     // 生成一个指定长度的数组，用来存放每个顾客在收银台消耗的时间
//     const checkoutTills = new Array(n).fill(0);
//
//     for (let i = 0; i < checkoutTills.length; i++) {
//         checkoutTills[i] = customers.shift();
//     }
//
//     while (customers.length > 0) {
//         // 总是花费时间最少的那个顾客优先离开收银台
//         let minVal = Min(checkoutTills);
//         // 找出哪个收银台花费的时间最少
//         let minIndex = checkoutTills.findIndex(item => item === minVal);
//         // 将下一名顾客放入空置的收银台中
//         // 因为计算的是总时间，因此要把前一个顾客的时间算上
//         checkoutTills[minIndex] = minVal + customers.shift();
//     }
//
//
//     return Max(checkoutTills);
// }

function queueTime(customers, n) {
    // 生成一个指定长度的数组，用来存放每个顾客在收银台消耗的时间，设置初始值为 0
    const checkoutTills = new Array(n).fill(0);

    for (let i = 0; i < customers.length; i++) {
        // 直接遍历顾客队列
        let customer = customers[i];
        // 找出收银台中耗时最短的那个
        let minIndex = checkoutTills.indexOf(Math.min(...checkoutTills));
        // 直接将顾客队列中最前面的放到空置的收银台中
        checkoutTills[minIndex] += customer;
    }

    return Math.max(...checkoutTills);
}

const Min = (arr) => {
    return Math.min.apply(null, arr);
}

const Max = (arr) => {
    return Math.max.apply(null, arr);
}

console.log(queueTime([1,2,3,4,5], 100));
console.log(queueTime([1,2,3,4,5], 1));
console.log(queueTime([1,2,3,4,5,8,4], 2));
console.log(queueTime([2,2,3,3,4,4], 2));
console.log(queueTime([10,2,3,3], 2));
console.log(queueTime([2,3,10], 2));