/**
 * Messi goals function
 * Messi is a soccer player with goals in three leagues:
 *
 * LaLiga
 * Copa del Rey
 * Champions
 * Complete the function to return his total number of goals in all three leagues.
 *
 * Note: the input will always be valid.
 *
 * For example:
 *
 * 5, 10, 2  -->  17
 */

// Test Case
// Test.assertEquals(goals(0,0,0), 0)
// Test.assertEquals(goals(43, 10, 5), 58)

/**
 * 求梅西在三个比赛中的进球总数
 * @param laLigaGoals
 * @param copaDelReyGoals
 * @param championsLeagueGoals
 */
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    var ret = laLigaGoals + copaDelReyGoals + championsLeagueGoals ;
    return ret ;
}

console.log(goals(0, 0, 0)) ;
console.log(goals(43, 10, 5)) ;