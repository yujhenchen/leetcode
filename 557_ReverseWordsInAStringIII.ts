function reverseWords(s: string): string {
    let word = '';
    let result = '';
    const sArr = [...s];
    for (let i = 0; i < sArr.length; i += 1) {
        if (sArr[i] === ' ') {
            result += `${word} `;
            word = '';
        }
        else word = `${sArr[i]}${word}`;
    }
    result += word;
    return result;
};
