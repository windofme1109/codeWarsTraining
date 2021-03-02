/**
 *
 * A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.
 *
 * In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.
 *
 * For example an extract of a stocklist could be:
 *
 * L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
 * or
 * L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
 * You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :
 *
 * M = {"A", "B", "C", "W"}
 * or
 * M = ["A", "B", "C", "W"] or ...
 * and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.
 *
 * For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

 * (A : 20) - (B : 114) - (C : 50) - (W : 0)
 * where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.
 *
 * If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).
 *
 *  Note:
 * In the result codes and their values are in the same order as in M.
 *
 */

/**
 * 统计每个分类下的书籍的总数量
 * @param listOfArt
 * @param listOfCat
 * @returns {string}
 */
// function stockList(listOfArt, listOfCat){
//
//     if (listOfCat.length === 0 || listOfArt.length === 0) {
//         return '';
//     }
//
//     const bookCounts = {};
//     listOfCat.forEach(item => {
//         bookCounts[item] = 0;
//     });
//
//     listOfArt.forEach(item => {
//         let category = item.slice(0, 1);
//         if (bookCounts[category] !== undefined) {
//             bookCounts[category] += item.split(' ')[1] * 1;
//         }
//     });
//     return Object.keys(bookCounts).map(key => {
//         return `(${key} : ${bookCounts[key]})`;
//     }).join(' - ');
//
// }

/**
 * 优化
 * @param listOfArt
 * @param listOfCat
 * @returns {string}
 */
function stockList(listOfArt, listOfCat){

    if (listOfCat.length === 0 || listOfArt.length === 0) {
        return '';
    }

    const bookCounts = {};

    listOfArt.forEach(item => {
        let category = item.slice(0, 1);
        // 将分类作为 bookCounts 对象的 key，如果 bookCounts 中没有这个属性，就取 0，否则取这个属性的 value
        // 每种书的数量形式是 "ABART 20"，空格分隔，那么我们使用正则提取出数字
        bookCounts[category] = (bookCounts[category] | 0) + item.match(/\s+(\d+)/g)[0] * 1;
    });

    return Object.keys(bookCounts).map(key => {
        return `(${key} : ${bookCounts[key]})`;
    }).join(' - ');

}

console.log(stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]));

