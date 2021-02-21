/**
 *
 *
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
 *
 * For example:
 *
 * uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
 *  uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
 * uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 *
 */

var uniqueInOrder = function(iterable) {
    let arr = typeof iterable === 'string' ? iterable.split('') : iterable;

    const ret = arr.reduce((acc, ele) => {
        if (acc.length !== 0 && acc[acc.length - 1] !== ele) {
            acc.push(ele);
        } else if (acc.length === 0) {
            acc.push(ele);
        }

        return acc;
    }, []);

    return ret;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
console.log(uniqueInOrder([1, 2, 2, 3, 3, 4, 4, 6, 4, 5, 5, 7]));