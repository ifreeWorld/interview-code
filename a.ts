type MyPick<T, U extends keyof T> = {
  [K in U]: T[K]
}

interface A {
  a: string
  b: number
  c: boolean
}

type B = MyPick<A, 'a' | 'b'>
type C = Pick<A, 'b' | 'c'>

export {}