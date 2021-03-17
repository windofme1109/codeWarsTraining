/**
 *
 * In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula
 *
 *
 ​*
 *
 * where n denotes a row of the triangle, and k is a position of a term in the row.
 *
 *
 *
 * Task
 * Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.
 *
 * Example:
 * n = 1: [1]
 * n = 2: [1,  1, 1]
 * n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
 */

/**
 * 杨辉三角
 * @param n
 * @returns {[]}
 */
// function pascalsTriangle(n) {
//     //return a flat array representing the values of Pascal's Triangle to the n-th level
//     const pascalsArr = [];
//
//     for (let i = 1; i <= n; i++) {
//         for  (let j = 0; j < i; j++) {
//             const val = factorial(i - 1) / (factorial(j) * factorial(i - 1 - j));
//
//             pascalsArr.push(val);
//         }
//     }
//
//     return pascalsArr;
// }

/**
 *
 * @param n
 * @returns {[]|number[]}
 */
function pascalsTriangle(n) {


    if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1, 1, 1];
    }
    const pascalsArr = [[1], [1, 1]];
    for (let i = 2; i < n; i++) {
        let element = [];
        element[0] = 1;
        for  (let j = 1; j < i; j++) {
            element[j] = pascalsArr[i - 1][j - 1] + pascalsArr[i - 1][j];

        }

        element[i] = 1;

        pascalsArr.push(element);
    }

    const ret = [];

    pascalsArr.forEach(item => {
        ret.push(...item);
    })
    return ret;

}

/**
 * 计算 n 的阶乘
 * @param n
 * @returns {number}
 */
function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

pascalsTriangle(5);
pascalsTriangle(3);
pascalsTriangle(4);
pascalsTriangle(6);
