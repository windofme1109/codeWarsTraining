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


function parseMolecule(formula) {
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
    while (i < len) {
        if (/[a-zA-Z]/.test(formulaArr[i])) {
            if (/[a-z]/.test(formulaArr[i])) {
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
            while (i < len && /[0-9]/.test(formulaArr[i])) {
                num += formulaArr[i];
                i += 1;
            }

            stack.push(num * 1);
        } else {
            stack.push(formulaArr[i]);
            i += 1;
        }
    }
    console.log(stack);
    // 将只有一个原子和右括号旁边没有数字的数量设置为 1
    let stack2 = [];
    len = stack.length;
    for (let i = 0; i < len; i++) {
        if (/^[a-zA-Z]/.test(stack[i])) {
            stack2.push(stack[i]);
            if (i === len - 1) {
                stack2.push(1);
            } else if (i !== len - 1 && !/\d+/.test(stack[i + 1])) {
                stack2.push(1);
            }
        } else if (stack[i] === ')') {
            stack2.push(stack[i]);
            if (i === len - 1) {
                stack2.push(1);
            } else if (i !== len - 1 && !/\d+/.test(stack[i + 1])) {
                stack2.push(1);
            }
        } else {
            stack2.push(stack[i]);
        }
    }
    // 统计每个原子的数量
    len = stack2.length;
    i = 0;
    const stack3 = [];
    while (i < len) {
        // console.log(stack3);
        if (/^[a-zA-Z]+/.test(stack2[i])) {
            stack3.push([stack2[i], stack2[i + 1]]);
            i += 2;
        } else if (stack2[i] === '(') {
            stack3.push(stack2[i]);
            i += 1;
        } else if (stack2[i] === ')') {
            let count = stack2[i + 1];
            let temp = [];
            let c = stack3.pop();

            while (i > 0 && c !== '(') {

                let c1 = [c[0], count * c[1]];
                temp.push(c1);
                c = stack3.pop();
            }

            stack3.push(...temp);

            i += 2;
        }

    }

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

// console.log(parseMolecule('K14[ON(SO3)2]2'));
// console.log(parseMolecule('KMnO4'));
// console.log(parseMolecule('H2OO'));
// console.log(parseMolecule('CH'));
console.log(parseMolecule('(C5H5)Fe(CO)2CH3'));