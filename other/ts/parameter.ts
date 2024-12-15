// https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.zh-CN.md

const foo = (arg1: string, arg2: number): void => {};

type tyy = typeof foo;

type FunctionParamsType = MyParameters<tyy>; // [arg1: string, arg2: number]

type MyParameters<T extends (...params: any[]) => any> = T extends (
  ...params: infer P
) => any
  ? P
  : [];

type Rect = {
  height: number;
  width: number;
};
type Circle = {
  center: [number, number];
  radius: number;
};

function isRect(x: Rect | Circle): x is Rect {
  return 'width' in x && 'height' in x;
}

function getType(x: Rect | Circle) {
  if (isRect(x)) {
    console.log(x.width);
  }
}

export {}