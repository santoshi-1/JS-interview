console.log("start");

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
      resolve(`like the ${video} video`);
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

/**
 * making the calls synchronous withour promise chaining
 */

importantAction("Santoshi")
  .then((res) => {
    console.log(res);
    likeTheVideo("JS interview questions").then((res) => {
      console.log(res);
      shareTheVideo("JS interview questions").then((res) => {
        console.log(res);
      });
    });
  })
  .catch((err) => {
    console.log("Error:", err);
  });

/**
 * making synchronous calls with promise chaining
 */

importantAction("Santoshi")
  .then((res) => {
    console.log(res);
    return likeTheVideo("Javascript interview questions");
  })
  .then((res) => {
    console.log(res);
    return shareTheVideo("Javascript interview questions");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/**
 * promise combinator - execute more than one promise at one time
 *
 * Promise.all - run all promises in parallel and return the result of all promises in an array
 * what if one of promise fails - then all promises will fail
 *
 * Promise.race - returns the result of the first promise which is either resolved or rejected.
 * In the below example result of likeTheVideo is the output
 *
 * Promise.allSelttled - returns the result of all promises irrespective of a rejected state or fullfilled state
 *
 * Promise.any - returns the result of the first fulfilled promise and ignore all the rejected one's
 * what if all the promises are failed - throws an error that all the promises were rejected
 */

Promise.all([
  importantAction("Santoshi"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("error promises failed", err);
  });

Promise.race([
  importantAction("Santoshi"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("error promises failed", err);
  });

Promise.allSettled([
  importantAction("Santoshi"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("error promises failed", err);
  });

Promise.any([
  importantAction("Santoshi"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("error promises failed", err);
  });

console.log("stop");
