const data = [
  {
    id: 1,
    title: '小米',
    children: [
      {
        id: 2,
        title: '技术',
        children: [
          { id: 3, title: '后端' },
          { id: 4, title: '运维' },
          { id: 5, title: '前端' },
        ],
      },
      { id: 6, title: '产品' },
    ],
  },
  {
    id: 11,
    title: '小米2',
    children: [
      {
        id: 22,
        title: '技术',
        children: [
          { id: 33, title: '后端' },
          { id: 44, title: '运维' },
          { id: 55, title: '前端' },
        ],
      },
      { id: 66, title: '产品' },
    ],
  },
];

// function deep(data) {
//     for (var i = 0; i < data.length; i++) {
//         var item = data[i]
//         console.log(item.title)
//         if (item.children) {
//             deep(item.children)
//         }
//     }
// }
// deep(data)

function wide(data) {
  var temp = [];
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    console.log(item.title);
    if (item.children) {
      temp = temp.concat(item.children);
    }
  }
  if (temp.length > 0) {
    wide(temp);
  }
}
wide(data);
