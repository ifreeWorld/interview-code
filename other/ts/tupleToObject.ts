// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.zh-CN.md
// 元祖转对象
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type ty = typeof tuple;

type TupleToObject<T extends readonly any[]> = {
  [V in T[number]]: V;
};

type result = TupleToObject<ty>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

type aaaaaa = [1, 2, 3][number];

// https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.zh-CN.md
// 元祖转联合，直接用T[number]

type Arr = ['1', '2', '3'];

type TupleToUnion<T extends any[]> = T[number];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

type UnionToTuple<T extends any> = T extends any ? [T] : never;

type Test2 = UnionToTuple<'1' | '2' | '3'>;

export {};
