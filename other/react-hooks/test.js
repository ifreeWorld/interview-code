const depsArr = [];
let index = 0;

function useEffect(cb, deps) {
  if (!depsArr[index]) {
    depsArr[index] = deps;
    cb();
    ++index;
    return;
  }

  const current = index;
  const beforeDeps = depsArr[current];
  const isChange = deps.some((item, index) => item !== beforeDeps[index]);
  if (isChange) {
    cb();
  }
  ++index;
}
