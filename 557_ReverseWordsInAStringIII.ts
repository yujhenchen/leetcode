function reverseWords(s: string): string {
    // Version 1:
    // let word = '';
    // let result = '';
    // const sArr = [...s];
    // for (let i = 0; i < sArr.length; i += 1) {
    //     if (sArr[i] === ' ') {
    //         result += `${word} `;
    //         word = '';
    //     }
    //     else word = `${sArr[i]}${word}`;
    // }
    // result += word;
    // return result;

    // Version 2
    let word = '';
    let result = '';
    for (let char of s) {
        if (char === ' ') {
            result += `${word} `;
            word = '';
        }
        else word = `${char}${word}`;
    }
    result += word;
    return result;

    // Version 3 (this is slower than the Version 1 and Version 2)
    // return s.split(' ').map(word => [...word].reverse().join('')).join(' ');
};
