import App from "./App.svelte";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;

let btnRandomizeArray = document.getElementById("randomize_array_btn");
let btnSort = document.getElementById("btnSort");
let barsContainer = document.getElementById("barsContainer");
let algorithmSelect = document.getElementById("algo") as HTMLSelectElement;

let speed = document.getElementById("speed") as HTMLSelectElement;
let slider = document.getElementById("slider") as HTMLInputElement;

console.log(
  btnRandomizeArray,
  btnSort,
  barsContainer,
  algorithmSelect,
  speed,
  slider
);

let rangeMin = 1;
let rangeMax = parseInt(slider.value, 10);
let barsCount = parseInt(slider.value, 10);
let factorHeight = 2;
let factorSpeed = 100;
let arrayNotSorted = new Array(barsCount);

let algorithmSelected = "";

console.log(arrayNotSorted);

slider.addEventListener("input", () => {
  barsCount = parseInt(slider.value, 10);
  rangeMax = parseInt(slider.value, 10);
  barsContainer.innerHTML = ""; // reset the bars

  // generate new bars container from a random unsorted array
  arrayNotSorted = createRandomArray();
  renderBars(arrayNotSorted);
});

speed.addEventListener("change", () => {
  factorSpeed = parseInt(speed.value, 10);
  console.log(factorSpeed);
});

algorithmSelect.addEventListener("change", () => {
  algorithmSelected = algorithmSelect.value;
  console.log(algorithmSelected);
});

const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const createRandomArray = () => {
  let array = new Array(barsCount);
  for (let i = 0; i < barsCount; i += 1) {
    array[i] = getRandomNumber(rangeMin, rangeMax);
  }
  return array;
};

document.addEventListener("DOMContentLoaded", () => {
  arrayNotSorted = createRandomArray();
  renderBars(arrayNotSorted);
});

function renderBars(array: number[]) {
  for (let i = 0; i < barsCount; i += 1) {
    let newBar = document.createElement("div");
    newBar.classList.add("bar");
    newBar.style.height = (array[i] * factorHeight) / 16 + "rem";
    barsContainer.appendChild(newBar);
  }
}
