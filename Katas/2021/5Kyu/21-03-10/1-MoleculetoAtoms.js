/**
 *
 * For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).
 *
 * For example:
 *
 * var water = 'H2O';
 * parseMolecule(water); // return {H: 2, O: 1}
 *
 * var magnesiumHydroxide = 'Mg(OH)2';
 * parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}
 *
 * var fremySalt = 'K4[ON(SO3)2]2';
 * parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
 * As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.
 *
 * Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional
 *
 */

/**
 * 统计化学式中原子的个数
 * @param formula
 * @returns {*}
 */
function parseMolecule(formula) {
    // 化学式的形式主要有：
    // H2O、Mg(OH)2、K4[ON(SO3)2]2、(C5H5)Fe(CO)2CH3
    // 比较难处理的是带括号的，所以需要使用栈，实现括号匹配，来求的内部的原子的数量
    // 1. 首先将化学式中的括号统一替换为小括号，方便后面的匹配
    // 例如输入是：K4[ON(SO3)2]2
    // formulaArr = K4(ON(SO3)2)2
    const formulaArr = formula.replace(/[\[\]\{\}]/g, function (match) {
        if (match === '[' || match === '{') {
            return '(';
        } else if (match === ']' || match === '}') {
            return ')';
        }
    });
    const stack = [];
    let len = formula.length;
    let i = 0;
    // 2. 分离出原子，以及其数量，重点在于分离出两个字母组成的原子，如 Mg、Na
    // stack = ['K', 14,  '(', 'O', 'N', '(', 'S', 'O', 3, ')', 2, ')', 2]
    while (i < len) {
        if (/[a-zA-Z]/.test(formulaArr[i])) {
            if (/[a-z]/.test(formulaArr[i])) {
                // 如果当前位置的元素是一个小写字母，那么它和前面的元素一定是一个整体
                // 因此我们使用 pop() 方法，拿到前面的元素，和当前的元素组合成一个完整的原子，如 Mg、Na、Cl
                let c = stack.pop();
                c = c + formulaArr[i];
                stack.push(c);
            } else {
                stack.push(formulaArr[i]);
            }

            i += 1;
        } else if (/[0-9]/.test(formulaArr[i])) {
            let num = formulaArr[i];
            i += 1;
            // 因为原子的数量可能会大于 10，因此这里要检测当前数字的下一位是否还是数字
            // 如果是，将其与前面的数字组合成一个完成的数字，这里使用 while 循环实现
            while (i < len && /[0-9]/.test(formulaArr[i])) {
                num += formulaArr[i];
                i += 1;
            }

            stack.push(num * 1);
        } else {
            // 添加小括号
            stack.push(formulaArr[i]);
            i += 1;
        }
    }
    console.log(stack);
    // 将只有一个原子和右括号旁边没有数字的数量设置为 1
    // stack2 = ['K', 14, '(', 'O', 1, 'N', 1, '(', 'S', 1, 'O', 3, ')', 2, ')', 2]
    let stack2 = [];
    len = stack.length;
    for (let i = 0; i < len; i++) {
        if (/^[a-zA-Z]/.test(stack[i])) {
            stack2.push(stack[i]);
            if (i === len - 1) {
                // 最后一位是原子，而不是数字，表示只有这一个原子，因此将其数量设置为 1
                stack2.push(1);
            } else if (i !== len - 1 && !/\d+/.test(stack[i + 1])) {
                // 如果当前的原子不是最后一位，且其下一位不是数字，说明也只有这一个原子
                stack2.push(1);
            }
        } else if (stack[i] === ')') {
            stack2.push(stack[i]);
            // 因为带括号的官能团或者根，数量有可能也是一，如 (C5H5)Fe(CO)2CH3，C5H5 和 CO 都是一个
            // 这种情况下，就不会刻意标注其数量，所以这里我们需要手动给其标注数量为 1
            // 标注方法同上
            if (i === len - 1) {
                stack2.push(1);
            } else if (i !== len - 1 && !/\d+/.test(stack[i + 1])) {
                stack2.push(1);
            }
        } else {
            stack2.push(stack[i]);
        }
    }

    console.log(stack2);
    // 统计每个原子的数量
    // stack3 = [ [ 'K', 14 ], [ 'S', 4 ], [ 'O', 12 ], [ 'N', 2 ], [ 'O', 2 ] ]
    len = stack2.length;
    i = 0;
    const stack3 = [];
    while (i < len) {
        if (/^[a-zA-Z]+/.test(stack2[i])) {
            // 遇到的是原子，原子和它下一位放到一个数组中，然后入栈 stack3
            stack3.push([stack2[i], stack2[i + 1]]);
            i += 2;
        } else if (stack2[i] === '(') {
            // 如果遇到的是左括号，直接入栈
            stack3.push(stack2[i]);
            i += 1;
        } else if (stack2[i] === ')') {
            // 如果遇到的是右括号，那么就开始计算一对括号内部，原子的数量
            // 先取出右括号下一位的数字，表示一个倍数
            let count = stack2[i + 1];
            let temp = [];
            // 此时 stack3 是这样的：[[K, 14], (, [O, 1], [N, 1], (, [S, 1], [O, 3]]
            // 所以 c 一定是包含了原子和数量的数组
            let c = stack3.pop();

            while (i > 0 && c !== '(') {
                // 如果c 不是左括号，证明一对括号内部的原子的数量统计还没有结束
                let c1 = [c[0], count * c[1]];
                // 计算后的原子和数量放入 temp 数组中
                temp.push(c1);
                // 继续出栈
                c = stack3.pop();
            }
            // temp 存放了一对括号内部所有的元素及其计算后的数量
            // 这里不能使用 concat()，因为我们这里使用的是栈，即对 stack3 进行原地操作
            // 使用 concat()，返回的是一个新数组
            stack3.push(...temp);
            // 这里为什么是 i + 2 呢，因为我们遍历的是 stack2 这个数组，遇到了右括号，同时取了它的下一位数字
            // 所以结束这里的括号匹配后，右括号及其后面的数字，我们就不需要遍历，直接跳过
            i += 2;
        }

    }
    // 使用 reduce() 将重复的原子的数量累加，同时组合为对象形式
    return stack3.reduce((acc, ele) => {
        let key = ele[0];
        if (acc[key]) {
            acc[key] += ele[1];
        } else {
            acc[key] = ele[1];
        }

        return acc;
    },{});

}

console.log(parseMolecule('K14[ON(SO3)2]2'));
// console.log(parseMolecule('KMnO4'));
// console.log(parseMolecule('H2OO'));
// console.log(parseMolecule('CH'));
// console.log(parseMolecule('(C5H5)Fe(CO)2CH3'));