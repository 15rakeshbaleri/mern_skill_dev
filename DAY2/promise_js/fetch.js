function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucess = true;
      if (sucess) {
        resolve("fetch data sucessfully");
      } else {
        reject("failed to fetch data");
      }
    }, 3000);
  });
}
