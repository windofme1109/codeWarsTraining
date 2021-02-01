/**
 *
 * Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
 *
 * It should remove all values from list a, which are present in list b.
 *
 * arrayDiff([1,2],[1]) == [2]
 * If a value is present in b, all of its occurrences must be removed from the other:
 *
 * arrayDiff([1,2,2,2,3],[2]) == [1,3]
 *
 */

/**
 * 比较数组的差异，获得差异的部分
 * @param a
 * @param b
 * @returns {*}
 */
function arrayDiff(a, b) {
    // const target = [...new Set(b)];
    const target = noRepeat(b);
    return a.filter(item => {
        return !target.includes(item);
    });
}

function noRepeat(arr) {
    const sortedArr = arr.sort((a, b) => {
        return a - b;
    });

    const ret = sortedArr.reduce((acc, ele) => {
        if (acc.length !== 0 && acc[acc.length - 1] !== ele) {
            acc.push(ele);
        } else if (acc.length === 0) {
            acc.push(ele);
        }

        return acc;
    }, []);

    return ret;

}

console.log(noRepeat([1, 1, 2, 3, 2, 4, 5, 3, 6]))


console.log(arrayDiff([1,2,2,2,3],[2]));
console.log(arrayDiff([1,2],[1]));
console.log(arrayDiff([],[1, 2]));