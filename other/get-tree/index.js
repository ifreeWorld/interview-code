/**
 * 
 * 关系型数组转换成树形结构对象 
  var obj = [
    { id:3, parent:2 },
    { id:1, parent:null },
    { id:2, parent:1 },
  ]
  o = {
    obj: {
      id: 1,
      parent: null,
      child: {
        id: 2,
        parent: 1,
        child: {
            id: 3
            parent: 2
        }
      }
    }
  }
 * 
 */
var obj = {};
function getTree(arr) {
  func(arr, null, obj);
  console.log(JSON.stringify(obj));
}

function func(arr, parentId, obj) {
  arr.forEach((item) => {
    if (item.parent === parentId) {
      if (parentId === null) {
        obj = {
          ...item,
        };
      } else {
        obj.child = {
          ...item,
        };
      }
      func(arr, item.id, obj.child);
    }
  });
  return obj;
}

// 第二种非递归做法
getTree([
  { id: 3, parent: 2 },
  { id: 1, parent: null },
  { id: 2, parent: 1 },
]);

var arr = [
  { id: 3, parent: 2 },
  { id: 1, parent: null },
  { id: 2, parent: 1 },
];

function getTree(arr) {
  var map = {};
  var result = {};
  arr.forEach((item) => {
    map[item.id] = item;
  });

  arr.forEach((item) => {
    if (item.parent) {
      var parent = map[item.parent];
      parent.child = item;
    } else {
      result.obj = item;
    }
  });
  return result;
}

console.log(JSON.stringify(getTree(arr)));

/**
 * 关系型数组转换成树形结构对象，children为数组
 */
var arr = [
  {
    id: 1,
    pid: 0,
    name: 'body',
  },
  {
    id: 2,
    pid: 1,
    name: 'title',
  },
  {
    id: 3,
    pid: 1,
    name: 'div',
  },
  {
    id: 4,
    pid: 3,
    name: 'span',
  },
  {
    id: 5,
    pid: 3,
    name: 'icon',
  },
  {
    id: 6,
    pid: 4,
    name: 'subspan',
  },
];

// 非递归
function getTree(arr) {
  var result = [];
  var map = {};

  arr.forEach((item) => {
    map[item.id] = item;
  });

  arr.forEach((item) => {
    var parent = map[item.pid];
    // parent为空，说明是第一个节点
    if (!parent) {
      result.push(item);
    } else {
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(item);
    }
  });
  return result;
}

console.log(JSON.stringify(getTree(arr)));

// 递归
function getTree(arr, pid) {
  return arr.reduce((prev, next) => {
    if (next.pid === pid) {
      prev.push(next);
      next.children = getTree(arr, next.id);
      return prev;
    }
    return prev;
  }, []);
}

console.log(JSON.stringify(getTree(arr, 0)));
