/**
 *
 * #Fold an array
 *
 * In this kata you have to write a method that folds a given array of integers by the middle x-times.
 *
 * An example says more than thousand words:
 *
 * Fold 1-times:
 * [1,2,3,4,5] -> [6,6,3]
 *
 * A little visualization (NOT for the algorithm but for the idea of folding):
 *
 * Step 1         Step 2        Step 3       Step 4       Step5
 * 5/           5|         5\
 * 4/            4|          4\
 * 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
 * ----*----      ----*          ----*        ----*        ----*
 *
 *
 * Fold 2-times:
 *  [1,2,3,4,5] -> [9,6]
 * As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.
 *
 * The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.
 *
 * If an array with one element is folded, it stays as the same array.
 *
 * The input array should not be modified!
 *
 * Have fun coding it and please don't forget to vote and rank this kata! :-)
 *
 * I have created other katas. Have a look if you like coding and challenges.
 *
 */

/**
 * 折叠数组，其实就是半个数组求和
 * @param array
 * @param runs
 * @returns {any[] | BigUint64Array | Uint8ClampedArray | Uint32Array | Blob | Int16Array | Float64Array | SharedArrayBuffer | string | Uint16Array | ArrayBuffer | Int32Array | Float32Array | BigInt64Array | Uint8Array | Int8Array}
 */
function foldArray(array, runs) {
    let initialArr = array.slice(0);
    for (let i = 0; i < runs; i++) {
        halfSum(initialArr);
    }

    return initialArr;

}

function halfSum(arr) {
    let half = Math.floor(arr.length / 2);
    for (let i = 0; i < half; i++) {
        arr[i] = arr[i] + arr.pop();
    }

    return arr;
}

let arr1 = [1, 2, 3, 4, 5];
// console.log(halfSum(arr1));
// console.log(halfSum([6, 6, 3]));
console.log(halfSum([ -9, 9, -8, 8, 66, 23 ]));


// console.log(foldArray([9, 6], 1));
// console.log(foldArray(arr1, 1));
// console.log(arr1);

// console.log(foldArray(arr1, 2));
// console.log(foldArray(arr1, 3));
// console.log(foldArray(arr1, 4));

