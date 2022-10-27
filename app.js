const checkBox = document.querySelector("input[name='theme']");
const htmlElement = document.documentElement;
console.log(htmlElement);

checkBox.addEventListener("click", function () {
  //
  if (checkBox.checked) {
    htmlElement.classList.add("transition");
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    htmlElement.classList.toggle("transition");
    htmlElement.setAttribute("data-theme", "light");
  }
});
