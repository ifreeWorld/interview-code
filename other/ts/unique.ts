// https://github.com/type-challenges/type-challenges/blob/main/questions/05360-medium-unique/README.md

type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2 = Unique<[1, 'a', 2, 'b', 2, 'a']>; // expected to be [1, "a", 2, "b"]
type Res3 = Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]

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

type Unique<T extends any[], Acc extends any[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? Includes<Acc, First> extends true
    ? Unique<Rest, Acc>
    : Unique<Rest, [...Acc, First]>
  : Acc;

export {};
