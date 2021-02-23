/**
 * Write a function that combines two arrays by alternatingly taking elements from each array in turn.

 Examples:

 [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

 [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
 Points:

 The arrays may be of different lengths, with at least one character/digit.
 One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
 Test.describe('Static Tests', function () {

  Test.it('Passes if arrays are equals', function () {

    Test.assertSimilar(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
    Test.assertSimilar(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
    Test.assertSimilar(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']), [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
    Test.assertSimilar(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]), ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);
    });
});

 */


/**
 * 版本1
 * @param a
 * @param b
 * @returns {*[]}
 */
function mergeArrays(a, b) {
    // your code here
    // 存放结果
    let ret = [] ;
    let length =  a.length < b.length ? a.length : b.length ;
    for (let i = 0; i < length; i++) {
        ret.push(a[i]) ;
        ret.push(b[i]) ;

    }
    console.log(ret) ;

    var restArr = a.length > b.length ? a.slice(b.length) : b.slice(a.length) ;

    return ret.concat(restArr) ;
}

/**
 * 版本2
 * @param a
 * @param b
 * @returns {[]}
 */
function mergeArrays2(a, b) {
    let ret = [] ;
    let longest = a.length > b.length ? a : b ;
    for (let i = 0; i < longest.length; i++) {
        if (a[i]) {
            ret.push(a[i]) ;
        }
        if (b[i]) {
            ret.push(b[i]) ;
        }
    }

    return ret ;
}


console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6])) ;


console.log(mergeArrays2(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6])) ;