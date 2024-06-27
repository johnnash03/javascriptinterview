export default function promiseAny<T>(iterable: Array<T>): Promise<T> {
  // throw 'Not implemented!';
  let errored = 0;
  const errors = new Array(iterable.length);
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      reject(new AggregateError([]));
      return;
    }
    for (let i = 0; i < iterable.length; i++) {
      Promise.resolve(iterable[i])
        .then((val) => {
          resolve(val);
          return;
        })
        .catch((e) => {
          errored++;
          errors[i] = e;
          if (errored === iterable.length) {
            reject(new AggregateError(errors));
            return;
          }
        });
    }
  });
}
