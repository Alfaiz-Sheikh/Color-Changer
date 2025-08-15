const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const container = document.querySelector("#container");

const btn1Color = () => {
    container.style.backgroundColor = "#32936F";
}
const btn2Color = () => {
    container.style.backgroundColor = "#FFBF00";
}
const btn3Color = () => {
    container.style.backgroundColor = "#E83F6F";
}
const btn4Color = () => {
    container.style.backgroundColor = "#2274A5";
}

btn1.addEventListener("click", btn1Color);
btn2.addEventListener("click", btn2Color);
btn3.addEventListener("click", btn3Color);
btn4.addEventListener("click", btn4Color);