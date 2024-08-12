/**
 *
 * If difference between two key strokes if > 300ms
 * then only fetch the data again / call getData
 *
 */

let counter = 0;

const getData = () => {
  // calls api and get data
  console.log("Fetching data .....", counter++);
};

const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this;

    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context);
    }, delay);
  };
};

const betterFunction = debounce(getData, 3000);
