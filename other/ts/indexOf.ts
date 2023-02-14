// indexOf https://github.com/type-challenges/type-challenges/blob/main/questions/05153-medium-indexof/README.md

type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1

type IndexOf<T extends any[], U, L extends any[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? L['length']
    : IndexOf<Rest, U, [...L, 1]>
  : -1;

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

// lastIndexOf https://github.com/type-challenges/type-challenges/blob/main/questions/05317-medium-lastindexof/README.zh-CN.md

type LastIndexOf<T extends any[], U> = T extends [...infer Rest, infer Last]
  ? Equal<Last, U> extends true
    ? Rest['length']
    : LastIndexOf<Rest, U>
  : -1;

type Res11 = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
type Res22 = LastIndexOf<[0, 0, 0], 2>; // -1

export {};
