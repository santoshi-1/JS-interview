function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 5000);
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
      reject(`Share the ${video} video`);
    }, 1000);
  });
}

function PromiseRacePolyfill(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

const promiseRacePolyfil = new PromiseRacePolyfill([
  importantAction("Santoshi"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
]);

promiseRacePolyfil
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
