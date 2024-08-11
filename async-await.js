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

const result = async () => {
  try {
    const message1 = await importantAction("Santoshi");
    console.log(message1);
    const message2 = await likeTheVideo("JS interview questions");
    const message3 = await shareTheVideo("JS interview questions");
    console.log({ message1, message2, message3 });
  } catch (err) {
    console.log("promises failed", err);
  }
};

result();

console.log("stop");
