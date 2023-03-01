// @algorithm @lc id=1000238 lang=javascript
// @title IDBivT
import * as a from 'algm';
// @test(3)=["((()))","(()())","(())()","()(())","()()()"]
// @test(1)=["()"]
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var res = [];
  function loop(path, open, close) {
    if (open > n) {
      return;
    }
    if (close > n) {
      return;
    }
    if (close > open) {
      return;
    }
    if (path.length === n * 2) {
      res.push(path);
      return;
    }
    loop(path + '(', open + 1, close);
    loop(path + ')', open, close + 1);
  }
  loop('', 0, 0);
  return res;
};

// https://leetcode.cn/problems/IDBivT/solution/jian-dan-yi-dong-javac-pythonjs-pei-yang-mmhs/
