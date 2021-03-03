/**
 *
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
 *
 * HH = hours, padded to 2 digits, range: 00 - 99
 * MM = minutes, padded to 2 digits, range: 00 - 59
 * SS = seconds, padded to 2 digits, range: 00 - 59
 * The maximum time never exceeds 359999 (99:59:59)

 You can find some examples in the test fixtures
 *
 */

/**
 * 格式化时间
 * @param seconds
 * @returns {string}
 */
function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600) ;
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let second = seconds - minutes * 60 - hours * 3600;

    hours = hours > 9 ? hours : ('0' + hours);
    minutes = minutes > 9 ? minutes : ('0' + minutes);
    second = second > 9 ? second : ('0' + second);

    return `${hours}:${minutes}:${second}`;
}

/**
 * 格式化时间优化
 * @param seconds
 * @returns {string}
 */
function humanReadable(seconds) {
    let hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    let minutes = String(Math.floor((seconds - hours * 3600) / 60)).padStart(2, '0');
    let second = String(seconds - minutes * 60 - hours * 3600).padStart(2, '0');
    return `${hours}:${minutes}:${second}`;
}

console.log(humanReadable(60));
console.log(humanReadable(66));
console.log(humanReadable(105));
console.log(humanReadable(3601));