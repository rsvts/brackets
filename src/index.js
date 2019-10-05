// module.exports = function check(str, bracketsConfig) {
//   // your solution
// }



const config1 = [
    ['(', ')']
];
const config2 = [
    ['(', ')'],
    ['[', ']']
];
const config3 = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
];

// module.exports = 
function check(str, bracketsConfig) {

    //     var newStr = str;
    //     // console.log(str);
    let count = 0;
    let found = 1;
    while (found == 1) {
        found = 0;
        for (let j = 0; j < bracketsConfig.length; j++) {
            let arr = str.split(bracketsConfig[j][0] + bracketsConfig[j][1]);
            console.log(bracketsConfig[j][0] + bracketsConfig[j][1], 'b.c');
            console.log(str, 'str');
            console.log(arr, 'arr');
            if (arr.length > 1) {
                count++
                found = 1;
                str = arr.join('');
            }
        }
    }
    let result = false;
    if (str == '') {
        result = true;
    }
    return result;
    // console.log(result, 'result');

    // let split = [];



    // var i = true;

    // // while (i) {

    // bracketsConfig.forEach((pattern) => {

    //     //     console.log(str, 'str+');
    //     console.log(pattern[0] + pattern[1], '---');

    //     let arr = str.split(pattern[0] + pattern[1]);

    //     //     console.log(str, 'str-');
    //     console.log(arr, 'arr');
    //     //     console.log(arr.length, 'arr.length');

    //     if (arr.join('').length) {

    //         i = true;
    //         str = arr.join('');
    //         console.log(str, '---- str ---');

    //     }

    // });
    // console.log(arr, '---- arr ---');
    // }

    // console.log(str, 'str2');
    // return str.split(pattern[0] + pattern[1]).map((item, i) => {
    //     console.log(item, 'item');
    //     return item.length;
    //     // return !item.length ? acc.push(item) : false;
    // });
    // console.log(acc, 'acc2');
    // console.log(split, 'split');
    // console.log(pattern, 'pattern');

    // return split;

    // console.log(str, 'str3');
    // console.log(res, 'res');

    // return res;

}

console.log(check('()', config1), 'true');
// console.log('-----------------');
// console.log(check('((()))()', config1), 'true');
// console.log('-----------------');
// console.log(check('())(', config1), 'false');
// console.log('-----------------');
console.log(check('([{}])', config3), 'true');
console.log('-----------------');
console.log(check('[(])', config2), 'false');
