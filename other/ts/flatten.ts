// 数组拍平 https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.zh-CN.md
type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends any[] ? [...Flatten<First>, ...Flatten<Rest>] : [First, ...Flatten<Rest>]
  : []

function flat<T extends any[]>(arr: T): Flatten<T> {
  var result: unknown[] = [];
  arr.forEach((item) => {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      result = result.concat(flat(item));
    }
  });
  return result as Flatten<T>;
}

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]


// 数组拍平depth https://github.com/type-challenges/type-challenges/blob/main/questions/03243-medium-flattendepth/README.md

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

type FlattenDepth<
  T extends any[],
  U extends number = 1,
  A extends any[] = []
> = A['length'] extends U
  ? T
  : T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...FlattenDepth<First, U, [...A, 1]>, ...FlattenDepth<Rest, U, A>]
    : [First, ...FlattenDepth<Rest, U, A>]
  : [];

export {};
