interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends string | number>(param: T): NameOrId<T> {
  return typeof param === 'number'
    ? ({ id: param as number } as NameOrId<T>)
    : ({ name: param as string } as NameOrId<T>);
}

const id: IdLabel = {
  id: 1,
};
