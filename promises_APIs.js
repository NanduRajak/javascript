// Promise.all()
const P1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success!");
  }, 2000);
});

const P2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("P2 Success!");
  //   }, 3000);
});

const P3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 successful!");
    reject("P3 Reajected!");
  }, 4000);
});

// Promise.all([P1, P2, P3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.allSetteled();

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success!");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success!");
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 successful!");
    reject("P3 Rejected!");
  }, 4000);
});

// Promise.allSettled([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.race()
const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success!");
    reject("p1 fails");
  }, 2000);
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success!");
  }, 3000);
});

const pr3 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("P3 successful!");
  //     reject("P3 Reajected!");
  //   }, 4000);
});

// Promise.race([pr1, pr2, pr3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promise.any()

const Prm1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success!");
    reject("P1 Rejected!");
  }, 2000);
});

const Prm2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success!");
    reject("P2 Rejected!");
  }, 3000);
});

const Prm3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 successful!");
    reject("P3 Rejected!");
  }, 4000);
});

Promise.any([Prm1, Prm2, Prm3]).then((res) =>
  console.log(res).catch((err) => console.error(err))
);
