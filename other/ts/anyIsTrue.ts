// anyistrue https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.zh-CN.md

type Sample1 = AnyOf<[1, '', false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]>; // expected to be false.

type AnyOf<T extends any[]> = T extends [infer First, ...infer Rest]
  ? Falsy<First> extends true
    ? AnyOf<Rest>
    : true
  : false;

type Falsy<T> = T extends
  | []
  | ''
  | 0
  | false
  | { [p in PropertyKey]: never }
  | undefined
  | null
  ? true
  : false;

export {};
