// join https://github.com/type-challenges/type-challenges/blob/main/questions/05310-medium-join/README.md

type Res = Join<['a', 'p', 'p', 'l', 'e'], '-'>; // expected to be 'a-p-p-l-e'
type Res1 = Join<['Hello', 'World'], ' '>; // expected to be 'Hello World'
type Res2 = Join<['2', '2', '2'], 1>; // expected to be '21212'
type Res3 = Join<['o'], 'u'>; // expected to be 'o'

type Primi = string | number;
type Join<T extends Primi[], U extends Primi> = T extends [infer First extends Primi, ...infer Rest extends Primi[]] ? 
`${First}${Rest extends [] ? '' : U}${Join<Rest, U>}` : ''

export {};
