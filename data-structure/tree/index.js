class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * https://yuchengkai.cn/docs/cs/algorithm.html#%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%85%88%E5%BA%8F%EF%BC%8C%E4%B8%AD%E5%BA%8F%EF%BC%8C%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86
 * 二分搜索树
 */
class Tree {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  addNode(val) {
    this.root = this.addChild(this.root, val);
  }

  addChild(node, val) {
    if (!node) {
      this.size++;
      return new Node(val);
    }

    if (val > node.val) {
      node.right = this.addChild(node.right, val);
    } else if (val < node.val) {
      node.left = this.addChild(node.left, val);
    }

    return node;
  }

  getSize() {
    return this.size;
  }

  preConsole() {
    console.log('递归先序遍历：');
    this._pre(this.root);
  }

  _pre(node) {
    if (node) {
      console.log(node.val);
      this._pre(node.left);
      this._pre(node.right);
    }
  }

  /**
   * 非递归实现
   */
  preNotConsole() {
    console.log('非递归先序遍历：');
    var stack = [];
    if (this.root) {
      var cur = this.root;
      stack.push(cur);
      while (stack.length > 0) {
        cur = stack.pop();
        console.log(cur.val);
        if (cur.right) {
          stack.push(cur.right);
        }
        if (cur.left) {
          stack.push(cur.left);
        }
      }
    }
  }

  midConsole() {
    console.log('递归中序遍历：');
    this._mid(this.root);
  }

  _mid(node) {
    if (node) {
      this._mid(node.left);
      console.log(node.val);
      this._mid(node.right);
    }
  }

  /**
   * 非递归中续遍历
   */
  midNotConsole() {
    console.log('非递归中序遍历：');
    var stack = [];
    if (this.root) {
      var cur = this.root;
      while (stack.length > 0 || cur) {
        if (cur) {
          stack.push(cur);
          cur = cur.left;
        } else {
          cur = stack.pop();
          console.log(cur.val);
          cur = cur.right;
        }
      }
    }
  }

  afterConsole() {
    console.log('递归后序遍历：');
    this._after(this.root);
  }

  _after(node) {
    if (node) {
      this._after(node.left);
      this._after(node.right);
      console.log(node.val);
    }
  }

  /**
   * 非递归后续遍历
   */
  afterNotConsole() {
    console.log('非递归后序遍历：');
    var stack1 = [];
    var stack2 = [];
    if (this.root) {
      var root = this.root;
      stack1.push(root);
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
        console.log(stack2.pop().val);
      }
    }
  }
}

var tree = new Tree();
tree.addNode(4);
tree.addNode(1);
tree.addNode(3);
tree.addNode(6);
tree.addNode(2);
tree.addNode(5);

tree.preConsole();
tree.preNotConsole();
tree.midConsole();
tree.midNotConsole();
tree.afterConsole();
tree.afterNotConsole();

/**
 * 反转二叉树
 * @param {*} node
 */
function reverseTree(node) {
  if (!node) {
    return;
  }

  var temp = node.left;
  node.left = node.right;
  node.right = temp;
  reverseTree(node.left);
  reverseTree(node.right);
}

// 二叉树的层序遍历
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
// 示例 1：

// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/binary-tree-level-order-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

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
 * @return {number[][]}
 */
// 递归解法
var levelOrder = function (root) {
  console.log('root', root);
  const res = [];
  let index = 0;
  function loop(root, i) {
    if (root === null) {
      return;
    }
    if (!res[i]) {
      res[i] = [];
    }
    res[i].push(root.val);
    if (root.left) {
      loop(root.left, i + 1);
    }
    if (root.right) {
      loop(root.right, i + 1);
    }
  }

  loop(root, index);
  return res;
};
// 迭代解法
var levelOrder = function (root) {
  const res = [];
  const q = [];
  if (root) {
    q.push(root);
  }
  while (q.length > 0) {
    let len = q.length;
    const temp = [];
    while (len > 0) {
      const item = q.shift();
      temp.push(item.val);
      if (item.left) {
        q.push(item.left);
      }
      if (item.right) {
        q.push(item.right);
      }
      len--;
    }
    res.push(temp);
  }
  return res;
};
