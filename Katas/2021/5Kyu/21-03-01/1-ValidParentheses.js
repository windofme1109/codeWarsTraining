/**
 *
 *
 * Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
 *
 * Examples
 * "()"              =>  true
 * ")(()))"          =>  false
 * "("               =>  false
 * "(())((()())())"  =>  true
 * Constraints
 * 0 <= input.length <= 100
 *
 */


class Stack {
    constructor(max = 1000) {
        this.size = 0;
        this.sp = -1;
        this.max = max;
        this.data = new Array(max);
    }


    push(item) {
        if (this.sp === this.max - 1) {
            throw 'Stack Overflow';
        }

        this.sp += 1;
        this.size += 1;
        this.data[this.sp] = item;
    }

    pop() {
        if (this.sp === -1) {
            throw 'Stack Underflow';
        }

        const ret = this.data[this.sp];
        this.sp -= 1;
        this.size -= 1;
        return ret;
    }

    peak() {
        return this.data[this.sp];
    }

    getSize() {
        return this.size;
    }
}

function validParentheses(parens){
    if (parens === '') {
        return true;
    }
    let stack = new Stack();
    const [first, ...others] = parens.split('');
    stack.push(first);
    for (let i = 0; i < others.length; i++) {
        const right = others[i];
        const left = stack.peak();
        if (isMatch(left, right)) {
            stack.pop();
        } else {
            stack.push(right);
        }
    }

    return stack.getSize() === 0;
}

function isMatch(l, r) {
    return l === '(' && r === ')';
}

console.log(validParentheses('()'));
console.log(validParentheses(')(()))'));
console.log(validParentheses('(())((()())())'));