/**
 *
 * throttling - used for rate limiting of the function call
 * delay the function call for a certain period of time
 *
 */

const expensive = () => {
  console.log("Expensive");
};

const throttle = (expensive, delay) => {
  let flag = true;

  return function () {
    if (flag) {
      flag = false;
      expensive();
    }

    setTimeout(() => {
      flag = true;
    }, delay);
  };
};

const throttleFunction = throttle(expensive, 3000);

window.addEventListener("resize", throttleFunction);
