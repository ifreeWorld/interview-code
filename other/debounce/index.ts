function debounce(func: Function, delay: number, immediate: boolean) {
  let timer: NodeJS.Timer | null = null;
  if (immediate) {
    let flag = false;
    return (...params: any[]) => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (!flag) {
        func(...params);
        flag = true;
      }
      timer = setTimeout(() => {
        flag = false;
      }, delay);
    };
  } else {
    return (...params: any[]) => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        func(...params);
      }, delay);
    };
  }
}

function throttle(func: Function, delay: number) {
  let last = 0;
  let timer: NodeJS.Timer | null = null;
  return (...params: any[]) => {
    let now = new Date().getTime();
    if (now - last > delay) {
      last = now;
      timer = setTimeout(() => {
        func(...params);
      }, delay);
    }
  };
}
