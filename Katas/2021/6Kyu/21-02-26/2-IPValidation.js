/**
 *
 * Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
 *
 * Input to the function is guaranteed to be a single string.
 *
 * Examples
 * Valid inputs:
 *
 * 1.2.3.4
 * 123.45.67.89
 * Invalid inputs:
 *
 * 1.2.3
 * 1.2.3.4.5
 * 123.456.78.90
 * 123.045.067.089
 *
 * Note that leading zeros (e.g. 01.02.03.04) are considered invalid
 *
 */

/**
 * 验证 IP 地址是否有效
 * @param str
 * @returns {boolean}
 */
function isValidIP(str) {

    let groups = str.split('.');

    const groupLength = groups.length;

    if (groupLength !== 4) {
        return false;
    }

    const pattern = /\d{1,3}/;
    /**
     * 无效的 ip：012.26.78.45   1e1.12.45.55   1.2.3   1.2.3.4.5  123.568.789.3
     *
     */
    for (let i = 0; i < groupLength; i++) {
        let group = groups[i];
        // console.log(group);
        if (!pattern.test(group)) {
            // 分组中有非数字的字符，就不是有效的 ip
            return false;
        }

        if (group.startsWith('0') && group.length > 1) {
            // 以 0 开头，且多余一位的分组
            return false;
        }

        if (parseInt(group) > 255 || parseInt(group) < 0) {
            // 十进制数字大于 255 或者小于 0
            return false;
        }
    }

    return true;
}

/**
 * 优化版本：验证 IP 地址是否有效
 * @param str
 * @returns {boolean}
 */
function isValidIP(str) {

    // 核心：无效的 ip 分组转换为数字后，再转换为字符串，值一定与原来的不同
    // '01' --> '1' --> '1'   '1e2' --> 100 --> '100'  ' 11' --> 11 --> '11'
    return str.split('.').filter((group) => (group === Number(group).toString() && Number(group) <= 255)).length === 4;
}

console.log(isValidIP('123.456.789.0'));
console.log(isValidIP('01.02.03.04'));
console.log(isValidIP('1.2.3.4.5'));
console.log(isValidIP(''));
console.log(isValidIP('12.255.56.1'));
console.log(isValidIP('0.0.0.0'));
console.log(isValidIP('137.255.156.100'));