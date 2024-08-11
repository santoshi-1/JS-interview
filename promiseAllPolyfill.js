function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`like the ${video} video`);
    }, 100);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}

function PromiseAllPolyfill(promises) {
  const results = [];

  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve(results);
      return;
    }

    let pendingIndex = promises.length;

    promises.forEach((promise, ind) => {
      Promise.resolve(promise).then((res) => {
        results[ind] = res;
        pendingIndex -= 1;

        if (pendingIndex == 0) {
          resolve(results);
        }
      }, reject);
    });
  });
}

const promiseAll = new PromiseAllPolyfill([
  importantAction("Santoshi"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
]);

promiseAll
  .then((res) => console.log(res))
  .catch((err) => console.log(new Error(err)));
