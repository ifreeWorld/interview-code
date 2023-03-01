/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode.cn/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (75.63%)
 * Likes:    928
 * Dislikes: 0
 * Total Accepted:    388.8K
 * Total Submissions: 514.1K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
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
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 *
 * 示例 2:
 *
 *
 * 输入: numRows = 1
 * 输出: [[1]]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
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
generate(5);
