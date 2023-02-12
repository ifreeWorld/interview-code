// https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.zh-CN.md

type arr3 = [1, 2, 3];

type Res1 = Push<arr3, 1>;

type Push<T extends any[], U> = [...T, U];

// https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.zh-CN.md

type arr4 = [1, 2, 3];

type Res2 = Push<arr3, 1>;

type Unshift<T extends any[], U> = [U, ...T];
