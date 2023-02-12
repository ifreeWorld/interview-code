function compose(...funcs: Function[]) {
  return (...params: any[]) => {
    return funcs.reduceRight((prev, next) => {
      return next(prev);
    }, params);
  };
}

function AAA(m: string) {
  return m + 'a';
}

function BBB(m: string) {
  return m + 'b';
}

function CCC(m: string) {
  return m + 'c';
}

var func12 = compose(AAA, BBB, CCC);
console.log(func12('1'));

// export {};
