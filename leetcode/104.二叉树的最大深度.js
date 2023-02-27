/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (77.14%)
 * Likes:    1516
 * Dislikes: 0
 * Total Accepted:    941.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 *
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最大深度 3 。
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
 * @return {number}
 */
var maxDepth = function (root) {
  var height = 0;
  function loop(node, h) {
    if (node) {
      h += 1;
      var leftH = loop(node.left, h);
      var rightH = loop(node.right, h);
      return Math.max(h, leftH, rightH);
    }
    return h;
  }
  height = loop(root, height);
  return height;
};
// @lc code=end

// 测试代码
const tree = creatTree([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(tree));
