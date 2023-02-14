interface Function {
  selfCall(this: Function, context: unknown, ...args: unknown[]): unknown;
  selfApply(this: Function, context: unknown, args: unknown[]): unknown;
  selfBind(
    this: Function,
    context: unknown,
    ...args: unknown[]
  ): (...rest: unknown[]) => unknown;
}
Function.prototype.selfCall = function (
  context: unknown,
  ...args: unknown[]
): unknown {
  const func = this;
  return func.apply(context, args);
};

function CallTest(a: number, b: number, c: number) {
  console.log(a, b, c);
}

CallTest.selfCall(this, 1, 2, 3);

Function.prototype.selfApply = function (
  context: unknown,
  args: unknown[]
): unknown {
  const func = this;
  return eval(`func.call(context, ${args.join(',')})`);
};

function ApplyTest(a: number, b: number, c: number) {
  console.log(a, b, c);
}

ApplyTest.selfApply(this, [1, 2, 3]);

Function.prototype.selfBind = function (
  context: unknown,
  ...args: unknown[]
): () => unknown {
  const func = this;
  return (...rest) => {
    func.apply(context, args.concat(rest));
  };
};

function BindTest(a: number, b: number, c: number) {
  console.log(a, b, c);
}

BindTest.selfBind(this, 1, 2)(3);
// export {};
