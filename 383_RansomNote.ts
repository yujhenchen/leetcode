function canConstruct(ransomNote: string, magazine: string): boolean {
    // use a map to keep magazine words count
    // loop ransomNote
    // if find char in map, count -1 for the map
    // else return false

    // if(ransomNote.length === 0 || magazine.length === 0) return false;

    const magazineCountMap = new Map<string, number>();
    let char = '';
    for (let i = 0; i < magazine.length; i += 1) {
        char = magazine.charAt(i);
        if (magazineCountMap.get(char)) magazineCountMap.set(char, magazineCountMap.get(char) + 1);
        else magazineCountMap.set(char, 1);
    }

    // console.log(magazineCountMap);

    for (let i = 0; i < ransomNote.length; i += 1) {
        char = ransomNote.charAt(i);
        if (magazineCountMap.get(char)) {
            if (magazineCountMap.get(char) < 1) return false;
            else magazineCountMap.set(char, magazineCountMap.get(char) - 1);
        }
        else return false;
    }
    return true;
};
