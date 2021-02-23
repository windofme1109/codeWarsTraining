/**
 * Write a function that returns the total surface area and volume of a box as an array:
 * [area, volume]
 */

// Test Case
// Test.assertEquals(getSize(4, 2, 6)[1], 48);
// Test.assertSimilar(getSize(10, 10, 10), [600, 1000]);
// Test.assertEquals(getSize(4, 2, 6)[0], 88);
// Test.assertEquals(getSize(4, 2, 6)[1], 48);

/**
 * 给定长宽高，计算表面积和体积
 * @param width
 * @param height
 * @param depth
 */
function getSize(width, height, depth) {
    var surfaceArea = (width * height + height * depth + width * depth) * 2 ;
    var volume = width * height * depth ;

    return [surfaceArea, volume] ;
}

console.log(getSize(4, 2, 6)[1] === 48) ;
console.log(getSize(10, 10, 10)) ;