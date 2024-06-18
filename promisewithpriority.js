/*
function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 7) {
        reject();
      } else {
        resolve(value);
      }
    }, value * 100);
  });
}
const promises = [
  { task: createAsyncTask(), priority: 1 },
  { task: createAsyncTask(), priority: 4 },
  { task: createAsyncTask(), priority: 3 },
  { task: createAsyncTask(), priority: 2 },
];
1, 2, 3, 4
*/

function promiseWithPriority(tasks) {
  let rejectedTaskIndex = [];
  tasks.sort((a, b) => a.priority - b.priority);
  let currentHighestResolved = { value: null, priority: 0 };
  return new Promise((resolve, reject) => {
    for (let i = 0; i < tasks; i++) {
      tasks[i]
        .then((val) => {
          // If some tasks are
          if (tasks[i].priority > currentHighestResolved.priority) {
            currentHighestResolved = {
              value: val,
              priority: tasks[i].priority,
            };
          }
          // if all the higher priorities are rejected, then resolve

          let allHigherprioritesRejected = false;

          // tasks.filter((task) => task.priority > )
        })
        .catch((err) => {
          rejectedTaskIndex.push(i);
        });
    }
  });
}
