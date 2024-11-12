function savedata(processdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(processdata + "and saved");
    }, 1000);
  });
}
