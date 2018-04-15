const Q = (b, a) => a * b - (a + b);
const N = (b, a) => a * a + b;

const evalQN = (op) => op === 'Q' ? Q : N;

function solution(expression) {
    let evalStack = [];
    let opStack = [];
    const tokens = tokenize(expression);
    for (const token of tokens) {
        if (token.type === 'num') {
            evalStack.push(token.value);
        } else {
            if (token.value === ')') {
                calc(evalStack, opStack);
            } else {
                opStack.push(token.value);
            }
        }
    }
    if (evalStack.length > 1) {
        calc(evalStack, opStack);
    }
    return evalStack[0];
}

function calc(evalStack, opStack) {
    while (opStack.length > 0) {
        const opCode = opStack.pop();
        if (opCode === '(') {
            return;
        }
        const value = evalQN(opCode)(evalStack.pop(), evalStack.pop());
        evalStack.push(value);
    }
}

class Token {
    constructor(value, type) {
        this.value = value;
        this.type = type;
    }
}

function tokenize(expression) {
    let res = [];
    let temp = '';
    for (const c of expression) {
        if (+c) {
            temp += c;
        } else {
            if (temp !== '') {
                let token = new Token(+temp, 'num');
                res.push(token);
                temp = '';
            }
            let token = new Token(c, 'op');
            res.push(token);
        }
    }
    if (temp !== '') {
        let token = new Token(+temp, 'num');
        res.push(token);
        temp = '';
    }
    return res;
}

const res = solution('2Q(3N4)')
console.log(res);
