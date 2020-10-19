/**
 * It happened decades before Snapchat, years before Twitter and even before Facebook. Targeted advertising was a bit of a challenge back then. One day, the marketing professor at my university told us a story that I am yet to confirm using reliable sources. Nevertheless, I retold the story to dozens of my students already, so, sorry BMW if it is all a big lie.

 * Allegedly, BMW, in an attempt to target the educated, produced billboard posters featuring the English alphabet with three letters missing: B, M and W. Needless to say, many were confused, some to the extent of road accidents.

 * Your task is to write a function that takes one parameter str that MUST be a string and removes all capital and small letters B, M and W. If data of the wrong data type was sent as a parameter the function must throw an error (IllegalArgumentException in Groovy): "This program only works for text."
 *
 */


/**
 * 移除一个字符串中大写或者小写的 B M W 这三个字母
 *
 * 接收的参数必须是字符串，如果不是，抛出异常
 */


/**
 *
 * @param str
 */

function removeBMW(str) {

    if (typeof str !== 'string') {
        // 如果输入的内容不是字符串，则主动抛出异常
        throw new Error('This program only works for text.');
    }

    const pattern = /[bmw]/ig;

    return str.replace(pattern, '');
}

removeBMW([]);

// const pattern = /[bmw]/ig;
// let str1 = 'bmwvolvoBMW';
// let str2 = 'blablahblah';
// let str3 = 'sgjklsbwwfdsemmgt';
//
// console.log(str1.replace(pattern, ''));
// console.log(str2.replace(pattern, ''));
// console.log(str3.replace(pattern, ''));