/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (58.63%)
 * Likes:    2288
 * Dislikes: 0
 * Total Accepted:    769.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
 *
 */
const creatTree = require('./debug/tree');

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }
  var isSame = function (p, q) {
    if (p.val === q.val) {
      var flag1 = true;
      if (p.left && q.right) {
        flag1 = isSame(p.left, q.right);
      } else if (p.left === q.right) {
        flag1 = true;
      } else {
        flag1 = false;
      }
      var flag2 = true;
      if (p.right && q.left) {
        flag2 = isSame(p.right, q.left);
      } else if (p.right === q.left) {
        flag2 = true;
      } else {
        flag2 = false;
      }
      return flag1 && flag2;
    }
    return false;
  };
  if (root.left && !root.right) {
    return false;
  }
  if (root.right && !root.left) {
    return false;
  }
  if (!root.right && !root.left) {
    return true;
  }
  return isSame(root.left, root.right);
};
// @lc code=end

// 测试代码
const tree = creatTree([1]);
console.log(isSymmetric(tree));
