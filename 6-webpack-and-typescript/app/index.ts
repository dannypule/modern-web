import digitsString from './digits'

let sum = 0;
let verifiedNums: number[] = [];

for (let i = 0; i < digitsString.length; i++) {
    const val = parseInt(digitsString.charAt(i));
    let nextVal: number;

    if (i === digitsString.length - 1) { // check if last item
        nextVal = parseInt(digitsString.charAt(0));
    } else {
        nextVal = parseInt(digitsString.charAt(i + 1));
    }

    if (val === nextVal) {
        verifiedNums.push(val)
    }
}

sum = verifiedNums.reduce((total: number, num: number) => {
    return total + num;
}, 0)

document.write(`
    ${sum}
`);