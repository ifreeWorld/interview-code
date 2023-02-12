// https://www.typescriptlang.org/play?#code/PQKgUABBCMDsEFoKHvzQM4mDRlGlEN37ARgJ4QCCAdgC4AWA9uSQGICuEAFAAICGVAZswEoIAYkAPaoD60kVwBO0rkTDZhyiIAyMwHduiqAD4IgRldA7DGAZa0BXgYAqlQN-+gRejAMP+Aia0Bz8RAAKAJQiBOU0Db8dcAUsYHnEwCAGLQhtQAp1QBNrQERjQAwjQFo5QC+9QDrowH95QApXABUiAAcAUwBlAGNpAEtsyggAFgA6AAYQgG0AYWZZIhLyAHMAXTZqSkpsgGcALmBgXPJqgHcSgGsy3IATEq5q2mlO4FmF4Ba2js6hQHozQAA5QFnPQDAdQDI9QEhzQCxNQCo5QCHlQAdTQBC3QF-FV8AbeMAjY0AXHKAeetHndTi8Pt9APF6gHQld6AAKNAPTmwWwgGj5QBBmoAsf5CAAM8ZQhthCvQhhUuEslhAALzsLgjCDkZgAWwIuWkABoIAR6YyWWyhFTdFwIABqLlEkkVGjSXK5akQclLNjQTkAJgEIWJ5FJEEKrVKy1IFPl+2k7S6bEVGqgWp1vBKADc5TS9bISoaKWx1WwAMzWiB4nEhQAE8oAkBMAm34B03mzo4iBfV6Ae+VAL8BDwhNkAFQaAAHTAIGRgGNrQB2HoA6VMApoqAYO0UVBIrE4jZXQbKd9ToBCa0Ao3KAUuNAOvK4LegUAYEqAWUTADHagAEjW5vQBwKjYy4AUvUAK-GAPbVAG6KgGW-QA55pXQhAwhAAOIlGjMAgQQBQcoBT80A0O6Y-qDUbjAmFajVABWQ3Wm2AcGAAC9qAgmgAcmAIDAIooAQAA+lB0EwdBECAAby7yAMdygCAHpBsEYRBEAgYoiiUDkcrRgAPBkEC5AAHpQkxLEMEAsOQhSUCU9C6DSpEUVR5A0ew2C8PSHS8GydElNIpLstg1SSdI-HkIJ0gQK4uSkmAAq6AJQmKYSUAAPwKUplANAA5AANpMnQ0IZ3RkZR1G0fUUA6RAGTYFA9JsHxwmiZQqkQMRbCSdU0l6aSPmado2A8rkTrSAA3IoSy5IUxkyHK-AMUx9C+fqMYkdZnHcfRjHMeQ2jueQ9IZAI9LERk4VgOBmEYRAgDStoAq9FpKi6GNXBOElEy2QbFKBEQAA3hAACiACOzBcMZnLjeReSMRAAC+EC8NItBMhAhkcPheQII+s2mV0SnAMwTHGUMhm4WAtoVPW7pLNAJrZYcbCWvSpKlF0nLcgyzKshyur0gQtC0KZPA+ZQ0jMLkGr3bq+pPaqr0HBan0QN9hx-TygNspyhSg+DkPkJySzExDuQ8JyuSU6TnIedjv0QJ09PU+Q0Ow-Dd2SkjbrLD6aNmu9bBc3DGpgPtcqFFwQxKfKDTYAtS2UERU0zcZREuRA0u0Lw-MNiqtJfTDhw+Ww-28kDFtE1yJMc+LuTYNo2jiVAKuJWrGuzdrDm6wR+uGyjnKY8zRzUrolt43y0i2+zUOR+wFP21TieCuwdOp6TFtM2bXQW2z2eO0nMNwy7bvK4tXvq9Nvt6wbj2C6HTuu+J3RgSAXXdVhgDQcqcgCm1t33XYaBoAuxAfaANVyiGAMeRgAq3teAzDGMwAPk+r7vlsX48EM0xsj+f6ARPl4L0vt6r+vL5vhs2+wMAQwQxdxVaVugAvZvcGjnyv95DI+19b0Pv+ICOEgA

function testCurry(a: any, b: any, c: any) {
  console.log(a, b, c);
}

function curry(func: Function): Function {
  return function fc(...params: any[]) {
    if (func.length === params.length) {
      return func(...params);
    } else {
      return (...innerParams: any[]) => {
        return fc(...[...params, ...innerParams]);
      };
    }
  };
}

var aaaaaaa = curry(testCurry);
var bbb = aaaaaaa(1);
var ccc = bbb(2);
ccc(3);

type Curry<T extends Function> = T extends (
  f: infer First,
  ...r: infer Rest
) => infer Res
  ? Rest['length'] extends 0
    ? T
    : (f: First) => Curry<(...r: Rest) => Res>
  : never;
declare function currying<T extends Function>(func: T): Curry<T>;
