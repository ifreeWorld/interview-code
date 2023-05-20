/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode.cn/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (65.50%)
 * Likes:    1363
 * Dislikes: 0
 * Total Accepted:    453.7K
 * Total Submissions: 692.6K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  var res = [];
  loop(
    nums,
    [],
    nums.map(() => false),
    res
  );
  return res;
};

var loop = function (nums, paths, used, res) {
  if (nums.length === paths.length && !includes(res, paths)) {
    res.push([...paths]);
    return;
  }
  for (var i = 0; i < nums.length; i++) {
    if (used[i]) {
      continue;
    }
    paths.push(nums[i]);
    used[i] = true;
    loop(nums, paths, used, res);
    used[i] = false;
    paths.pop();
  }
};

var includes = function (arr, cur) {
  return arr.some((item) => {
    return item.every((it, index) => {
      return it === cur[index];
    });
  });
};
// @lc code=end
