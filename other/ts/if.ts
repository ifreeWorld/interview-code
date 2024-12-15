// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.zh-CN.md
type A = If<true, 'a', 'b'>; // expected to be 'a'
type B = If<false, 'a', 'b'>; // expected to be 'b'

type If<Flag extends boolean, A, B> = Flag extends true ? A : B;

export {}