let promise = new Promise((resolve, reject) => {
  let rand = getRandom(25);
  setTimeout(() => {
    if (rand % 2 == 0) resolve('result');
    else reject('error');
  }, rand * 1000);
});

promise.then(
  (result) => alert('четное'),
  (error) => alert('нечетное'),
);

function getRandom(num) {
  return Math.floor(Math.random() * num);
}

//второй вариант

let randomNum = Math.round(Math.random() * 100);
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (randomNum % 2 == 0) resolve('result');
    else reject('error');
  }, rand * 1000);
});

promise.then(
  (result) => alert('четное'),
  (error) => alert('нечетное'),
);
