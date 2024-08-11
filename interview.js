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
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}

function promRecurse(funcPromises) {
  if (funcPromises.length === 0) {
    return;
  }

  const currPromise = funcPromises.shift();

  currPromise.then((res) => console.log(res)).catch((err) => console.log(err));

  promRecurse(funcPromises);
}

promRecurse([
  importantAction("Santoshi"),
  likeTheVideo("Javascript interview questions"),
  shareTheVideo("Javascript interview questions"),
]);
