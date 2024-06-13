/**
 * @param {Promise} p1
 * @param {Promise} p2
 * @return {Promise<any>}
 */
export default function promiseMerge(p1, p2) {
  return new Promise((resolve, reject) => {
    Promise.all([p1, p2]).then(([res1, res2]) => {
      if (typeof res1 === typeof res2) {
        if (typeof res1 === "number" || typeof res1 === "string") {
          resolve(res1 + res2);
        } else if (Array.isArray(res1) && Array.isArray(res2)) {
          resolve([...res1, ...res2]);
        }
      }
    });
  });
}
