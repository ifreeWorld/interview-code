// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.zh-CN.md

type a = [1, 2];
type b = [3, 4];

type c = Concat<a, b>;

type Concat<A extends any[], B extends any[]> = [...A, ...B];

export {}