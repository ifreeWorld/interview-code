/**
 * 关系型数组转换成树形结构对象，children为数组
 */
var ar11r = [
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

type Item = {
  id: number;
  pid: number;
  name: string;
};

type Child = Item & {
  children: Child[];
};

// function getTree(arr: { id: number; pid: number; name: string }[]) {
//   const map: Record<number, Item> = {};
//   arr.forEach((item) => {
//     map[item.id] = item;
//   });
//   const result: Child[] = [];
//   arr.forEach((item) => {
//     var parent = map[item.pid];
//     if (!parent) {
//       result.push(item as Child);
//     } else {
//       if (!(parent as Child).children) {
//         (parent as Child).children = [];
//       }
//       (parent as Child).children.push(item as Child);
//     }
//   });
//   return result;
// }

function getTree(arr: Item[]) {
  return loop11(arr, 0);
}

function loop11(arr: Item[], pid: number): Child[] {
  return arr.reduce((prev: Child[], next: Item) => {
    if (next.pid === pid) {
      prev.push(next as Child);
      (next as Child).children = loop11(arr, next.id);
      return prev;
    }
    return prev;
  }, []);
}

console.log(JSON.stringify(getTree(ar11r)));
export {};
