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
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}

function PromiseAllSettled(promises) {
  let settledPromises = promises.map((promise) => {
    return promise
      .then((res) => {
        return {
          status: "fulfilled",
          value: res,
        };
      })
      .catch((error) => {
        return {
          status: "rejected",
          value: error,
        };
      });
  });

  return Promise.all(settledPromises);
}

const promiseAllSettled = new PromiseAllSettled([
  importantAction("Santoshi"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
]);

promiseAllSettled
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
