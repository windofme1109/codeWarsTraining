/**
 * You are given two angles (in degrees) of a triangle.
 *
 * Write a function to return the 3rd.
 *
 *  Note: only positive integers will be tested.
 */


// Test Case
//Test.assertEquals(otherAngle(30, 60), 90);
//
// Test.assertEquals(otherAngle(60, 60), 60);
//
// Test.assertEquals(otherAngle(43, 78), 59);
//
// Test.assertEquals(otherAngle(10, 20), 150);

/**
 * 给定三角形的两个角，求第三角
 * @param a
 * @param b
 * @returns {number}
 */
function otherAngle(a, b) {
    return 180 - (a + b) ;
}