/**
 *
 *
 * The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
 *
 * Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
 *
 * Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
 *
 * Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
 *
 * Examples:
 * tickets([25, 25, 50]) // => YES
 * tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
 * tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
 *
 */


/**
 * 根据自己当前有的零钱种类决定是否能卖出电影票
 * @param peopleInLine
 * @returns {string}
 */
// function tickets(peopleInLine) {
//     // 定义零钱的种类和数量
//     const billTypes = {
//       25: 0,
//       50: 0,
//       100: 0
//     };
//
//     // 依次遍历排队的人群（获取到他们手中的零钱）
//     for (let i = 0; i < peopleInLine.length; i++) {
//         if (peopleInLine[i] === 25) {
//             // 收到 25 元，可以直接买票，因此 25 的数量加 1
//             billTypes[25] += 1;
//         } else if (peopleInLine[i] === 50) {
//
//             // 收到 50 元，需要找零 25 元
//             // 首先判断还有没有 25 元的零钱，没有的话，不能卖票，所以直接返回 NO
//             if (billTypes[25] <= 0) {
//                 return 'NO';
//             }
//             // 至少有一个 25 元，可以找零，并卖票
//             billTypes[25] -= 1;
//             billTypes[50] += 1;
//         } else if (peopleInLine[i] === 100) {
//
//             // 收到 100 元，需要找零 75 元
//             // 首先判断还有没有 25 元的零钱，没有的话，不能卖票，所以直接返回 NO
//
//             // 75 元两种组成：25 * 3  和 50 * 1 + 25 * 1
//             // 为了能给尽量多的人找零，那么我们优先使用 50 与 25 组合成 75 进行找零
//             // 因此，有以下几种情况：
//             // 仅有 25，且数量 >= 3，可以找零
//             // 25 和 50 同时存在，50 >= 1，则优先使用 50 和 25 的组合
//             if (billTypes[25] <= 0) {
//                 return 'NO';
//             } else if (billTypes[25] >= 1 && billTypes[50] >= 1) {
//                 billTypes[100] += 1;
//                 billTypes[25] -= 1;
//                 billTypes[50] -= 1;
//             } else if (billTypes[25] >= 3 && billTypes[50] === 0) {
//                 billTypes[100] += 1;
//                 billTypes[25] -= 3;
//             } else {
//                 return 'NO';
//             }
//         }
//     }
//     return 'YES';
//
// }

function tickets(peopleInLine) {
    const billTypes = {
        25: 0,
        50: 0,
        100: 0
    };

    for (let i = 0; i < peopleInLine.length; i++) {
        switch (peopleInLine[i]) {
            case 25:
                billTypes[25] += 1;
                break
            case 50:
                billTypes[25] -= 1;
                billTypes[50] += 1;
                break
            case 100:
                billTypes[50] ? billTypes[50] -= 1 : billTypes[25] -= 2;
                billTypes[25] -= 1;
                break
        }
        // 如果 25 的数量小于 0，证明在之前的找零过程中已经没有 25 的零钱了
        // 而没有 25，则无法完成找零，所不能卖票，返回 NO
        if (billTypes[25] < 0) {
            return 'NO';
        }
    }

    return 'YES';
}


console.log(tickets([25, 25, 50]));
console.log(tickets([25, 25, 50, 50, 100]));
console.log(tickets([25,25,50,100,25,50,25,100,25,25,25,100,25,25,25,100]));
console.log(tickets([25, 100]));
console.log(tickets([25,50,25,100,25,25,25,100,25,25,25,100,25,50,25,100,25,25,25,100,25,50,50,25]));
console.log(tickets([25,25,25,100,25,50,25,100,25,50,25,100,25,50,50,25]));
// console.log(tickets([25,25,25,100,25,50,25,100,25,50,25,100,25,50]));

