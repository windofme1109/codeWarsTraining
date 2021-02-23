/**
 * You're on your way to the market when you hear beautiful music coming from a nearby street performer.
 * The notes come together like you wouln't believe as the musician puts together patterns of tunes.
 * As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that,
 * it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "How much do people normally tip for something like this?"
 * The artist looks up. "Its always gonna be about tree fiddy."
 *
 * It was then that you realize the musician was a 400 foot tall beast from the paleolithic era.
 * The Loch Ness Monster almost tricked you!
 *
 * There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster:
 * A.) It is a 400 foot tall beast from the paleolithic era
 * B.) It will ask you for tree fiddy
 *
 * Since Nessie is a master of disguise,
 * the only way accurately tell is to look for the phrase "tree fiddy".
 * Since you are tired of being grifted by this monster,
 * the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.
 */

// Test Case
// console.log("Your girlscout cookies are ready to ship. Your total comes to tree fiddy");
// Test.expect(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
// console.log("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.");
// Test.expect(!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));

// 判断字符串中，是否含有tree fiddy，3.50或者three fifty
// 根据我的推断，这个三个词组，应该表示相同的意义，发音比较接近
// 直接使用ES6新增的includes()方法
function isLockNessMonster(s) {
    //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
    // 适合使用正则
    // 使用全局模式，在整个字符串中匹配
    var regex = /(tree fiddy)|(3.50)|(three fifty)/g ;
    return regex.test(s) ;

}

console.log(isLockNessMonster('Your girlscout cookies are ready to ship. Your total comes to tree fiddy')) ;
console.log(isLockNessMonster('Your girlscout cookies are ready to ship.')) ;
console.log(isLockNessMonster('asgdfss three fifty')) ;
console.log(isLockNessMonster('sdflfdshk 3.50')) ;
console.log(isLockNessMonster('sdflfdshk 3.And50')) ;
console.log(isLockNessMonster('sdflfdshk 3.5 three and fifty')) ;