async function handledata() {
  try {
    const data = await fetchdata();
    const process = await processdata(data);
    const result = await savedata(process);
    console.log("data saved", result);
  } catch (error) {
    console.log("error", error);
  }
}
handledata();
