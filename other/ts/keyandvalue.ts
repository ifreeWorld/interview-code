type obj = {
  a: string;
  b: number;
};

type Keya = keyof obj; // a | b
type Value = obj[Keya]; // string | number

export {};
