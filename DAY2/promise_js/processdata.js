function processdata(data) {
  return new Promise((Resolve, Reject) => {
    setTimeout(() => {
      const processdata = data + "and processed";
      Resolve(processdata);
    }, 5000);
  });
}

processdata("convert");
