function wordPattern(pattern: string, s: string): boolean {
    // get the array of the string s
    const sArr = s.split(' ');

    // return false if array has different length than pattern
    if (sArr.length !== pattern.length) return false;

    // lopp string array
    // if cannot find pattern in word to pattern map, 
    // // if cannot find word in pattern to word map, add into word to pattern map, and add to pattern to word map
    // // else return false
    // else
    // // if the word in the pattern to word map if different from the current word, return false
    const wordToPattern: Map<string, string> = new Map();
    const patternToWord: Map<string, string> = new Map();
    let word;
    let patternChar;
    for (let i = 0; i < sArr.length; i += 1) {
        word = sArr[i];
        patternChar = pattern.charAt(i);
        // console.log(`word: ${word}, patternChar: ${patternChar}`);

        if (!wordToPattern.get(word)) {
            if (!patternToWord.get(patternChar)) {
                wordToPattern.set(word, patternChar);
                patternToWord.set(patternChar, word);
            }
            else return false;
        }
        else {
            if (patternToWord.get(patternChar) !== word) return false;
        }
    }
    return true;
};
