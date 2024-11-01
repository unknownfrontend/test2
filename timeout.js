// Задача 1
const myFunc = (callback, timeout) => {
  const start = Date.now();

  setTimeout(() => {
    callback();
    const end = Date.now();
    const diff = end - start - timeout;

    console.log(`Разница составила: ${diff} ms`);
  }, timeout);
}

const cb = () => console.log(1)

myFunc(cb, 2000);


// Задача 2
const myFunc2 = (callback, intervalTime, intervalsCount) => {
  let intervalCount = 0;
  const startTime = Date.now();
  const log = (diff, isLate) => {
    console.log(`%cРазница ${diff} ms`, isLate ? 'color: red;' : 'color: green;');
  }

  const interval = setInterval(() => {
    const currentTime = Date.now();
    const timeDiff = currentTime - (startTime + intervalCount * intervalTime);

    callback(intervalCount);
    log(timeDiff, timeDiff > intervalTime);
    intervalCount++;

    if (intervalCount >= intervalsCount) {
      clearInterval(interval);
    }
  }, intervalTime);
}

const cb2 = (n) => console.log(n + 1);

myFunc2(cb2, 1000, 10);