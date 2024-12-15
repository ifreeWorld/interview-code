// https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.zh-CN.md

type arr = [1, 2, 3];
type len = Length<arr>; // 3

type Length<T extends any[]> = T['length'];

export {}