/**
 *
 * Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

 * I love you
 * a little
 * a lot
 * passionately
 * madly
 * not at all
 * When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

 * Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
 */

// Test Case
// function testing(actual, expected) {
//     Test.assertEquals(actual, expected)
// }
// Test.describe("howMuchILoveYou",function() {
//     Test.it("Basic tests",function() {
//         testing(howMuchILoveYou(7),"I love you")
//         testing(howMuchILoveYou(3),"a lot")
//         testing(howMuchILoveYou(6),"not at all")
// })})

// 版本1
// function howMuchILoveYou(nbPetals) {
//     var phrase = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'] ;
//     // 保证nbPetals > 0
//     if (nbPetals <= 0) {
//         return ;
//     }
//     var index = nbPetals % phrase.length ;
//     return index === 0 ? phrase[index + 5] : phrase[index - 1] ;
//
//
// }

// 版本2
function howMuchILoveYou(nbPetals) {
    var phrase = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'] ;
    // 保证nbPetals > 0
    if (nbPetals <= 0) {
        return ;
    }
    // 这就是一个计算余数的问题，循环周期是6，那么就是计算nbPetals除以6的余数
    // 因为输出的内容在数组中，要根据索引去获得，索引范围是0-5
    // 1 % 6 = 1，2 % 6 = 2，...，将余数减1，就是对应内容的索引
    // 但是这样做，永远取不到最后一个内容，最后一个内容与6对应，但是6 % 6 = 0，0 - 1 = -1，取不到任何内容
    // 第一种解决方法是判断，判断余数是否为0
    // 第二种方法比较巧妙，直接将nbPetals减1，再去除以6，就可以得到余数是余数同样是0-5
    // 但是这样得到直接是索引，而且将6的倍数减1，获得的余数一定是5，可以取得最后一个内容
    // 余数为0，取得的是第一个
    return phrase[(nbPetals - 1) % phrase.length] ;


}

console.log(howMuchILoveYou(7))
console.log(howMuchILoveYou(3))
console.log(howMuchILoveYou(6))
console.log(howMuchILoveYou(11))
