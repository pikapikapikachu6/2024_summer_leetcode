/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;
    let wlist1 = word1.split("");
    let wlist2 = word2.split("");
    let result = "";
    let i = 0;

    while (i < len1 || i < len2) {
        if (i < len1) result += wlist1[i]; 
        if (i < len2) result += wlist2[i];
        i ++;
    }

    return result;
};