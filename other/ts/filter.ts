// 数组filter https://github.com/type-challenges/type-challenges/blob/main/questions/18220-medium-filter/README.md

type Filter<T extends any[], U> = T extends [infer First, ...infer Rest]
  ? First extends U 
    ? [First, ...Filter<Rest, U>]
    : Filter<Rest, U>
  : []

type test1 = Filter<[1, 2, 3, 4, 5, 1, 2, 3], 1 | 2>;
type test2 = Filter<[1, 2, 3, 4], 1>;
  

export {};
