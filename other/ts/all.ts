// 全部都相等 https://github.com/type-challenges/type-challenges/blob/main/questions/18142-medium-all/README.md
type Test1 = [1, 1, 1];
type Test2 = [1, 1, 2];

type Todo = All<Test1, 1>; // should be same as true
type Todo2 = All<Test2, 1>; // should be same as false

// type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y
//   ? 1
//   : 2)
//   ? true
//   : false;

type All<T extends any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? All<Rest, U>
    : false
  : true;

type Equal<X,Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

export {};
