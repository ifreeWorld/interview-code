// https://github.com/type-challenges/type-challenges/blob/main/questions/05117-medium-without/README.zh-CN.md

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

// 第一种方式，写出equal和include，分别判断是否equal和include
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Include<X extends any[], Y> = X extends [infer First, ...infer Rest]
  ? Equal<First, Y> extends true
    ? true
    : Include<Rest, Y>
  : false;

type EqualOrInclude<X, Y> = X extends any[]
  ? Include<X, Y> extends true
    ? true
    : false
  : Equal<X, Y> extends true
  ? true
  : false;

type Without<T extends any[], U> = T extends [infer First, ...infer Rest]
  ? EqualOrInclude<U, First> extends true
    ? Without<Rest, U>
    : [First, ...Without<Rest, U>]
  : [];

// 第二种方式，采取将数组变成union，即[1,2,3] => 1|2|3，这样方便 1 extends 1|2|3
type ArraytoUnion<T> = T extends any[] ? T[number] : T;

type Without1<T extends any[], U> = T extends [infer First, ...infer Rest]
  ? First extends ArraytoUnion<U>
    ? [...Without1<Rest, U>]
    : [First, ...Without1<Rest, U>]
  : [];

type Res111 = Without1<[1, 2], 1>; // expected to be [2]
type Res11 = Without1<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res21 = Without1<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

export {};
