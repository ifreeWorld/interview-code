// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.zh-CN.md

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'aaa'>; // expected to be `false`

type Includes<T extends any[], U extends any> = T extends [
  infer First,
  ...infer Rest
]
  ? isEqual<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

type isEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

type test = isEqual<2 | 3, 2 | 3>;

export {};
