/**
 * Complete the solution so that it reverses the string value passed into it.
 *
 * solution('world'); // returns 'dlrow'
 */

// Test case
// Test.expect(solution('world') == 'dlrow')

function solution(str){
    var ret = str.split('').reverse().join('') ;
    return ret ;
}

console.log(solution('world')) ;
console.log(solution('are')) ;