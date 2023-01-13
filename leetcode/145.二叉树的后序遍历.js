/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode.cn/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (76.25%)
 * Likes:    965
 * Dislikes: 0
 * Total Accepted:    559.5K
 * Total Submissions: 733.7K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,null,2,3]
 * 输出：[3,2,1]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
 *
 */

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
 * 递归解法
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  function recusion(node) {
    if (node) {
      node.left && recusion(node.left);
      node.right && recusion(node.right);
      res.push(node.val);
    }
  }
  recusion(root);
  return res;
};
/**
 * 非递归解法
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  const stack1 = [];
  const stack2 = [];
  if (root) {
    stack1.push(root);
  }
  while (stack1.length > 0) {
    root = stack1.pop();
    stack2.push(root);
    if (root.left) {
      stack1.push(root.left);
    }
    if (root.right) {
      stack1.push(root.right);
    }
  }
  while (stack2.length > 0) {
    res.push(stack2.pop().val);
  }
  return res;
};
// @lc code=end
