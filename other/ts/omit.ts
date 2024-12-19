interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// type MyOmit<T, K extends keyof T> = {
//   [key in keyof T as key extends K ? never : key]: T[key]
// }

type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type aaa = MyOmit<Todo, 'description'>;


export {};
