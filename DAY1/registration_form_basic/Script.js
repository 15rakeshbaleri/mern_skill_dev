let result = document.getElementsByClassName("result");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  result.innerText = "form submitted";
});
