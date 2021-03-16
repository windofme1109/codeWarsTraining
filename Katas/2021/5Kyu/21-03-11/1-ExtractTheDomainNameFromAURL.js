/**
 *
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 *
 * domainName("http://github.com/carbonfive/raygun") == "github"
 * domainName("http://www.zombie-bites.com") == "zombie-bites"
 * domainName("https://www.cnet.com") == "cnet"
 *
 */

/**
 * 从 url 中提取域名
 * url 的形式主要有：
 * http://github.com/carbonfive/raygun
 * http://www.zombie-bites.com
 * https://www.cnet.com
 * www.cnet.com
 * https://youtube.com
 * @param url
 * @returns {string|*}
 */
function domainName(url){
    //your code here
    // 因为 https://、http://、www 不一定都有，所以使用分组结合 ? 来分离出同 host 相关的内容
    const pattern = /(https?:\/\/)?(www\.)?(.+)/;
    let host = url.match(pattern)[3];

    if (host) {
        return host.split('.')[0];
    }

    return '';
}

function domainName2(url){
    //your code here
    // 因为 https://、http://、www 不一定都有，所以使用分组结合 ? 来分离出同 host 相关的内容
    // 因为域名后面一定跟着 .com .gov .cn 等等，所以末尾使用零宽后向断言判断域名后面是否有以 . 开头的东西
    //
    const pattern = /(https?:\/\/)?(www\.)?(.+)(?=\..+)/;
    let host = url.match(pattern)[3];

    return host ? host : '';
}

// const pattern = /(https?:\/\/)?(www\.)?.+(?=\.)/
// console.log('http://github.com/carbonfive/raygun'.match(pattern));
// console.log('http://www.zombie-bites.com'.match(pattern));



console.log(domainName2('http://github.com/carbonfive/raygun'))
console.log(domainName2('http://www.zombie-bites.com'))
console.log(domainName2('https://www.cnet.com'))
console.log(domainName2('https://youtube.com'))
console.log(domainName2('www.xakep.ru'))