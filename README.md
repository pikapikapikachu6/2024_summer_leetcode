# Record for 2024 Summer leetcode
## day1 09/11/2024
### 1768. 交替合并字符串
https://leetcode.cn/problems/merge-strings-alternately/description/
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
