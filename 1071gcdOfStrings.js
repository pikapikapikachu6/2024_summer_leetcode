/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    } else {
        const gcd_method = (s1, s2) => (s2 === 0 ? s1 : gcd_method(s2, s1 % s2));
        return str1.substr(0, gcd_method(str1.length, str2.length));
    }
};
