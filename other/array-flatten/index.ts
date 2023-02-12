type Flatten<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? First extends unknown[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : T;

type test = Flatten<[1, 2, 3, [4], [[5]]]>;

function flatten<T extends unknown[]>(arr: T): Flatten<T> {
  let result: unknown[] = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = [...result, ...flatten(item)];
    } else {
      result = [...result, item];
    }
  });
  return result as Flatten<T>;
}
const t = flatten([1, 2, 3, [4], [[5]]]);

console.log(t);

// export {};
