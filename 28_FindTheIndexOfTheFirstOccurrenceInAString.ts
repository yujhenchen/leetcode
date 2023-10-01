function strStr(haystack: string, needle: string): number {
    // Version 1
    let index = -1;
    for (let i = 0; i < haystack.length; i += 1) {
        if (i + needle.length > haystack.length) return -1;
        if (haystack.substring(i, i + needle.length) === needle) return i;
    }
    return index;

    // Version 2 (This version is not allowed)
    // return haystack.indexOf(needle);
};
