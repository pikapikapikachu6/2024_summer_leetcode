# Record for 2024 Summer leetcode
## day1 09/11/2024
### 1768. 交替合并字符串
https://leetcode.cn/problems/merge-strings-alternately/description/
给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。
返回 合并后的字符串。
#### 示例 1：
输入：word1 = "abc", word2 = "pqr"
输出："apbqcr"
解释：字符串合并情况如下所示：
word1：  a   b   c
word2：    p   q   r
合并后：  a p b q c r

#### 示例 2：
输入：word1 = "ab", word2 = "pqrs"
输出："apbqrs"
解释：注意，word2 比 word1 长，"rs" 需要追加到合并后字符串的末尾。
word1：  a   b 
word2：    p   q   r   s
合并后：  a p b q   r   s

#### 示例 3：
输入：word1 = "abcd", word2 = "pq"
输出："apbqcd"
解释：注意，word1 比 word2 长，"cd" 需要追加到合并后字符串的末尾。
word1：  a   b   c   d
word2：    p   q 
合并后：  a p b q c   d

### 解题思路：
循环到两个string的结尾，每一次分别加入string1和string2的字符。

## day2 09/11/2024
### 1071. 字符串的最大公因子
https://leetcode.cn/problems/greatest-common-divisor-of-strings/description/

对于字符串 s 和 t，只有在 s = t + t + t + ... + t + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。
给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。

#### 示例 1：
输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"

#### 示例 2：
输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"

#### 示例 3：
输入：str1 = "LEET", str2 = "CODE"
输出：""

### 解题思路
欧几里得算法递归

## day3 11/11/2024
### 1431. 拥有最多糖果的孩子
https://leetcode.cn/problems/merge-strings-alternately/description/
有 n 个有糖果的孩子。给你一个数组 candies，其中 candies[i] 代表第 i 个孩子拥有的糖果数目，和一个整数 extraCandies 表示你所有的额外糖果的数量。  
返回一个长度为 n 的布尔数组 result，如果把所有的 extraCandies 给第 i 个孩子之后，他会拥有所有孩子中 最多 的糖果，那么 result[i] 为 true，否则为 false。
注意，允许有多个孩子同时拥有 最多 的糖果数目。

#### 示例 1：
输入：candies = [2,3,5,1,3], extraCandies = 3
输出：[true,true,true,false,true] 
解释：如果你把额外的糖果全部给：
孩子 1，将有 2 + 3 = 5 个糖果，是孩子中最多的。
孩子 2，将有 3 + 3 = 6 个糖果，是孩子中最多的。
孩子 3，将有 5 + 3 = 8 个糖果，是孩子中最多的。
孩子 4，将有 1 + 3 = 4 个糖果，不是孩子中最多的。
孩子 5，将有 3 + 3 = 6 个糖果，是孩子中最多的。

#### 示例 2：
输入：candies = [4,2,1,1,2], extraCandies = 1
输出：[true,false,false,false,false] 
解释：只有 1 个额外糖果，所以不管额外糖果给谁，只有孩子 1 可以成为拥有糖果最多的孩子。

#### 示例 3：
输入：candies = [12,1,12], extraCandies = 10
输出：[true,false,true]

### 解题思路
先找出最大值 遍历整个list逐个比较