const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1 resolved");
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2 resolved");
  }, 10000);
});

async function promiseHandle() {
  const p1 = await promise1;
  console.log(p1);

  const p2 = await promise2;
  console.log(p2);
}

promiseHandle();
