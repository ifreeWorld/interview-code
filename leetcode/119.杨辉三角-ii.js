/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode.cn/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (68.97%)
 * Likes:    464
 * Dislikes: 0
 * Total Accepted:    254.4K
 * Total Submissions: 368.9K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
 *
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 *
 *
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: rowIndex = 3
 * 输出: [1,3,3,1]
 *
 *
 * 示例 2:
 *
 *
 * 输入: rowIndex = 0
 * 输出: [1]
 *
 *
 * 示例 3:
 *
 *
 * 输入: rowIndex = 1
 * 输出: [1,1]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 0
 *
 *
 *
 *
 * 进阶：
 *
 * 你可以优化你的算法到 O(rowIndex) 空间复杂度吗？
 *
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  return generate(rowIndex + 1)[rowIndex];
};
var generate = function (numRows) {
  var result = [];
  for (var i = 1; i <= numRows; i++) {
    var before = result[i - 2] || [];
    var temp = [];
    temp.push(1);
    // 中间数
    if (before.length > 1) {
      var len = i;
      for (var j = 0; j < before.length - 1; j++) {
        temp.push(before[j] + before[j + 1]);
      }
    }
    if (i > 1) {
      temp.push(1);
    }
    result.push(temp);
  }
  return result;
};
// @lc code=end
