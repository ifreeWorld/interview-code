// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.zh-CN.md
// !!!!! 当在泛型中使用条件类型时，如果传入的是一个联合类型，就会变成分发的 。相当于会自动一个个遍历进行判断

type obj2 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>;

type MyExclude<T, U> = T extends U ? never : T;
export {}