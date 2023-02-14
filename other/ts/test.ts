// https://xiaoman.blog.csdn.net/article/details/126449668
// reverse数组翻转
type Arr = [1, 2, 3, 4];

type ReveArr<T> = T extends [infer First, ...infer Rest]
  ? [...ReveArr<Rest>, First]
  : [];

type Res = ReveArr<Arr>;

export {};
