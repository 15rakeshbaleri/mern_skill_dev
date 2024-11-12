const prom = new Promise((resolve, reject) => {
  let sucess = true;
  if (sucess) {
    resolve("completed");
  } else {
    reject("not complted");
  }
});
