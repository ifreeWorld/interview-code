// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.zh-CN.md
type MyPick<T, U extends keyof T> = {
  [k in U]: T[k];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
