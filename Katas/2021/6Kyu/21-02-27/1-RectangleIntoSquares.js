/**
 *
 * The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).
 *
 *
 *
 * Can you translate this drawing into an algorithm?
 *
 * You will be given two dimensions
 *
 * a positive integer length (parameter named lng)
 * a positive integer width (parameter named wdth)
 *
 *   sqInRect(5, 3) should return [3, 2, 1, 1]
 *   sqInRect(3, 5) should return [3, 2, 1, 1]
 *
 */

/**
 * 真正的长方形能拆分成多少个正方形
 * @param lng 长方形的长度
 * @param wdth 长方形的宽度
 * @returns {null|[]} 正方形的宽度
 */
function sqInRect(lng, wdth){

    if (lng === wdth) {
        return null;
    }

    let length = Math.max(...arguments);
    let width = Math.min(...arguments);

    const square = [];

    // 只有长和宽不等的时候才能继续拆分
    while (width !== length) {
        square.push(width);
        if (width > length - width) {
            let temp = width;
            width = length - width;
            length = temp;
        } else if (width <= length - width) {
            length = length - width;
        }


    }
    square.push(width);
    return square;
}

sqInRect(5, 3);
sqInRect(3, 5);