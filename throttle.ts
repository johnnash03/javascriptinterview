// Understand the implication of this using test cases in gfe
// Arrow functions cannot be used to declare the inner function due to lexical binding of this.
// Typescript is complex. Understand maybe later
// gfe has slightly different solution
type ThrottleFunction<T extends any[]> = (...args: T) => any;

export default function throttle<T extends any[]>(
  func: ThrottleFunction<T>,
  wait: number
): ThrottleFunction<T> {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (...args) {
    if (!timer) {
      func.apply(this, args);
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
      }, wait);
    }
  };
}
