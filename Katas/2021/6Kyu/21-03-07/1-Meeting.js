/**
 *
 * John has invited some friends. His list is:
 *
 * s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
 * Could you make a program that
 *
 * makes this string uppercase
 * gives it sorted in alphabetical order by last name.
 * When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
 *
 * So the result of function meeting(s) will be:
 *
 * "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
 * It can happen that in two distinct families with the same family name two people have the same first name too.
 *
 * Notes
 * You can see another examples in the "Sample tests".
 *
 */

/**
 * 字符串排序与转换
 * @param s
 * @returns {string}
 */
function meeting(s) {
    let firstAndLast = s.split(';').map(item => {
        const name = item.split(':');
        return {
            first: name[0].toUpperCase(),
            last: name[1].toUpperCase()
        }
    });

    firstAndLast.sort((a, b) => {
        if (a.last.localeCompare(b.last) === 0) {
            return a.first.localeCompare(b.first);
        }

        return a.last.localeCompare(b.last);
    });

    return firstAndLast.map(item => {
        return `(${item.last}, ${item.first})`
    }).join('');

}
const s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
const ret = "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)";
console.log(meeting(s) === ret);