// https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.zh-CN.md
// 键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);

type PromiseFlatten<T> = T extends PromiseLike<infer U> ? PromiseFlatten<U> : T;

// [K in keyof T]的意思是： K是T数组的index值。
// { [K in keyof T]: PromiseFlatten<T[K]> }的意思是：{0: promise1, 1: promise2, 2: promise3}，对象的key都是数字，其实就是数组
declare function PromiseAll<T extends any[]>(
  arr: readonly [...T]
): PromiseLike<{ [K in keyof T]: PromiseFlatten<T[K]> }>;

export {};
