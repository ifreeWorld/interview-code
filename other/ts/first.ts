// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.zh-CN.md
type arr1 = [1];
type res = First<arr1>; // 1

type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;
