/**
 *
 * In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

 * Example
 * filter_list([1,2,'a','b']) == [1,2]
 * filter_list([1,'a','b',0,15]) == [1,0,15]
 * filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 *
 */

/**
 *
 * 过滤掉数组中的字符串，只保留数字
 *
 */

function filter_list(l) {
    // Return a new array with the strings filtered out

    if (!Array.isArray(l)) {
        return;
    }

    const ret = l.filter(item => {

        return typeof item === 'number';
    })

    return ret;
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));