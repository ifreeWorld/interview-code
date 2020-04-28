class Node {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

class NodeList {
  constructor() {
    this.size = 0
    this.head = null
  }

  addToFirst(val) {
    this.addToIndex(val, 0)
  }

  addToLast(val) {
    this.addToIndex(val, this.size)
  }

  addToIndex(val, index) {
    var node = new Node(val, null)
    if (index === 0) {
      node.next = this.head
      this.head = node
    } else {
      var temp = this.find(this.head, index - 1, 0)
      node.next = temp.next
      temp.next = node
    }

    this.size++
  }

  find(head, index, currentIndex) {
    if (currentIndex === index) {
      return head
    }
    return this.find(head.next, index, currentIndex + 1)
  }

  remove(index) {
    if (index >= this.size) {
      return
    }
    this.size--
    if (index === 0) {
      var temp = this.head
      this.head = this.head.next
      temp.next = null
      return temp
    } else if (index === this.size - 1) {
      debugger
      var temp = this.find(this.head, index - 1, 0)
      var del = temp.next
      temp.next = null
      return del
    } else {
      var temp = this.find(this.head, index - 1, 0)
      var del = temp.next
      temp.next = del.next
      del.next = null
      return del
    }
  }

  getSize() {
    return this.size
  }

  console() {
    var temp = this.head
    while (true) {
      if (temp === null) {
        return
      }
      console.log(temp.val)
      temp = temp.next
    }
  }
}

var nodeList = new NodeList()

nodeList.addToLast(1)
nodeList.addToLast(2)
nodeList.addToLast(3)
nodeList.addToLast(4)
nodeList.addToLast(5)
nodeList.addToLast(6)

nodeList.console()
nodeList.remove(6)
nodeList.console()

/**
 * 
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 示例:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *  
 * 限制：
 * 
 * 0 <= 节点个数 <= 5000
 * 
 * 注意：本题与主站 206 题相同：https://leetcode-cn.com/problems/reverse-linked-list/
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var cur = head
  var prev = null
  var next = null
  while (cur) {
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}



/**
 * 判断链表成环(https://leetcode-cn.com/problems/linked-list-cycle/)
 * 
 * 思路：搞2个指针，一个快指针，每次跳2级，一个慢指针，每次跳1级
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  var fast = head.next
  var slow = head
  while(fast && fast.next) {
    if (fast === slow) {
      return true
    }
    slow = slow.next
    fast = fast.next.next
  }
  return false
};