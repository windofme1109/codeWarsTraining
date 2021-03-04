/**
 *
 * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
 *
 * Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
 *
 * The following are examples of expected output values:
 *
 * rgb(255, 255, 255) // returns FFFFFF
 * rgb(255, 255, 300) // returns FFFFFF
 * rgb(0,0,0) // returns 000000
 * rgb(148, 0, 211) // returns 9400D3
 *
 */

function rgb(r, g, b){

    let redToHex = r > 255 ? decimalToHexadecimal(255) : decimalToHexadecimal(r);
    let greenToHex = g > 255 ? decimalToHexadecimal(255) : decimalToHexadecimal(g);
    let blueToHex = b > 255 ? decimalToHexadecimal(255) : decimalToHexadecimal(b);

    redToHex = redToHex.length === 2 ? redToHex : ('0' + redToHex);
    greenToHex = greenToHex.length === 2 ? greenToHex : ('0' + greenToHex);
    blueToHex = blueToHex.length === 2 ? blueToHex : ('0' + blueToHex);
    console.log(redToHex, greenToHex, blueToHex);
    return `${redToHex}${greenToHex}${blueToHex}`;
}

function decimalToHexadecimal(num) {

    if (num <= 0) {
        return '0';
    }
    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let ret = [];
    while (num !== 0) {
        let quotient =  Math.floor(num / 16);
        let remainder =  num % 16;
        ret.push(digit[remainder]);
        num = quotient;
    }

    ret.reverse();

    return ret.join('');
}

console.log(rgb(0, 0, 0));
