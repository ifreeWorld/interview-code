const data = [
  {
    item: 'keyboard',
    price: 404.99,
    inStock: true,
  },
  {
    item: 'mouse',
    price: 198.2,
    inStock: true,
  },
  {
    item: 'monitor',
    price: 1299.49,
    inStock: false,
  },
];

/*console中会输出：
   |-----------|--------|--------|
   |item       |price   |inStock |
   |-----------|--------|--------|
   |"keyboard" |404.99  |true    |
   |"mouse"    |198.2   |true    |
   |"monitor"  |1299.49 |false   |
   |-----------|--------|--------|
   */

const printTable = (data) => {
  const keys = Object.keys(data[0]);
  const result = [];
  const lengthArr = [];
  data.forEach((item) => {
    let length = 0;
    keys.forEach((key) => {
      const value =
        typeof item[key] === 'string' ? `"${item[key]}"` : `${item[key]}`;
      length = Math.max(length, key.length, String(value).length);
    });
    lengthArr.push(length);
  });

  const printBorder = () => {
    result.push('|');
    lengthArr.forEach((length) => {
      result.push('-'.repeat(length));
      result.push('|');
    });
    result.push('\n');
  };
  printBorder();

  // 标题
  result.push('|');
  keys.forEach((key, index) => {
    result.push(key);
    result.push(' '.repeat(lengthArr[index] - key.length));
    result.push('|');
  });
  result.push('\n');

  printBorder();
  data.forEach((item) => {
    result.push('|');
    Object.values(item).forEach((v, index) => {
      const value = typeof v === 'string' ? `"${v}"` : `${v}`;
      result.push(value);
      result.push(' '.repeat(lengthArr[index] - value.length));
      result.push('|');
    });
    result.push('\n');
  });
  console.log(result.join(''));
};

printTable(data);
