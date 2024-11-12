/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let total = 0;
    for (let i = 0; i < flowerbed.length; i ++) {
        if (flowerbed[i] == 0 && (flowerbed[i + 1] == 0 || i === flowerbed.length - 1) && (i == 0 || flowerbed[i - 1] == 0)) {
            total ++;
            flowerbed[i] = 1;
            i ++;
        } 
    }
    return (total >= n)
};