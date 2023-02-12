// https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false

type IsUnion<T, U = T> = [T] extends [never]
  ? false
  : T extends never
  ? false
  : [U] extends [T]
  ? false
  : true;
