/**
 *
 * Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
 *
 * For instance:
 *
 * "hello case".camelCase() => HelloCase
 * "camel case word".camelCase() => CamelCaseWord
 *
 */

String.prototype.camelCase = function(){
    return this.replace(/^\w/, function (match) {
        return match.toUpperCase();
    }).replace(/\s(\w)/g, function (match, p1) {
        return p1.toUpperCase();
    }).trim();
}

/**
 * 字符串转换为驼峰命名
 * @returns {string}
 */
String.prototype.camelCase = function(){
    return this.split(/\s+/).map(word => {
        return word.replace(/^\w/, function (match) {
            return match.toUpperCase();
        });
    }).join('');
}

// console.log("camel case word".camelCase());
console.log(" camel case word ".camelCase() === 'CamelCaseWord');
// console.log("camel case word ".camelCase());