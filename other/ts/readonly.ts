// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.zh-CN.md
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

type Data1 = {
  a: number;
  b: string;
};

type Date2 = MyReadonly<Data1>;

type X = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};

// https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.zh-CN.md

type DeepReadonly<T extends Record<string, any>> = T extends any
  ? {
      readonly [key in keyof T]: T[key] extends Record<string, any>
        ? T[key] extends Function
          ? T[key]
          : DeepReadonly<T[key]>
        : T[key];
    }
  : never;

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: 'hi';
  };
  readonly y: 'hey';
};

type Todo = DeepReadonly<X>; // should be same as `Expected`

type Todo2 = DeepReadonly<{
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 'string';
        };
        k: 'hello';
      };
      l: [
        'hi',
        {
          m: ['hey'];
        }
      ];
    };
  };
}>;

export {};
