/**
 *
 * Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go.
 * Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall.
 * Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names.
 * As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

 * Your code will show Full name of the neighbor and the truncated version of the name as an array.
 * If the number of the characters in name is equal or less than two, it will return an array containing only the name as is.
 */

// Test Case
// describe("Basic tests",_=>{
// Test.assertSimilar(whoIsPaying("Mexico"),["Mexico", "Me"]);
// Test.assertSimilar(whoIsPaying("Melania"),["Melania", "Me"]);
// Test.assertSimilar(whoIsPaying("Melissa"),["Melissa", "Me"]);
// Test.assertSimilar(whoIsPaying("Me"),["Me"]);
// Test.assertSimilar(whoIsPaying(""), [""]);
// Test.assertSimilar(whoIsPaying("I"), ["I"]);
// });

// 这个题目的要求是，输入一个姓名，输出一个数组，然数组的第一个元素是姓名，第二个元素是姓名的缩写
// 缩写是取姓名的前两个字母
// 如果姓名少于或等于两个字符，数组只包含姓名就可以
/**
 *
 * @param name
 */
function whoIsPaying(name){
    return name.length <= 2 ? [name] : [name, name.slice(0, 2)] ;
}

console.log(whoIsPaying('Mexico')) ;
console.log(whoIsPaying('Melissa')) ;
console.log(whoIsPaying('')) ;
console.log(whoIsPaying('I')) ;