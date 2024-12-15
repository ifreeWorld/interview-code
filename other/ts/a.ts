const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

type MyParameters<T extends (...params: any) => any> = T extends (...params: infer P) => any ? P : []


const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"

type MyReturnType<T extends (...params: any) => any> = T extends (...params: any) => infer P ? P : void

export {}