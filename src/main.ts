import App from "./App.svelte";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { bubbleSort } from "./lib/functions/bubbleSort";

const app = new App({
  target: document.getElementById("app"),
});

export default app;

const tabsAlgo = document.querySelectorAll("#algo");
export let tabs = [...tabsAlgo];

const algorithmSelectTab = document.getElementsByClassName("btnAlgoNav");
const buttonsAlgo = [...algorithmSelectTab];
const btnRestart = document.getElementById("btnRestart") as HTMLButtonElement;

let barsContainer = document.getElementById("barsContainer");
let btnRandomizeArray = document.getElementById("randomize_array_btn");
let btnSort = document.getElementById("btnSort") as HTMLButtonElement;

let sliderSpeed = document.getElementById("speedSloMo") as HTMLDivElement;
sliderSpeed.addEventListener("mouseout", () => {
  factorSpeed = parseInt(sliderSpeed.ariaValueNow, 10);
});

let sliderCount = document.getElementById("slider") as HTMLDivElement;

let rangeMin = 1;
let rangeMax = parseInt(sliderCount.ariaValueMax, 10);
let barsCount = parseInt(sliderCount.ariaValueNow, 10);
export let factorHeight = 2;
export let factorSpeed = 100;
let arrayNotSorted = new Array(barsCount);
let arrayNotSortedHistoryMap = [];
let algorithmSelected = "";
let btnSwitchAlgoClickCount = 0;

sliderCount.addEventListener("mouseout", () => {
  barsCount = parseInt(sliderCount.ariaValueNow, 10);
  rangeMax = parseInt(sliderCount.ariaValueNow, 10);
  barsContainer.innerHTML = ""; // reset the bars

  // generate new bars container from a random unsorted array
  arrayNotSorted = createRandomArray();
  arrayNotSortedHistoryMap = [...arrayNotSorted];
  renderBars(arrayNotSorted);
});

buttonsAlgo.forEach((btn) => {
  (btn as HTMLButtonElement).addEventListener("click", () => {
    algorithmSelected = (btn as HTMLButtonElement).value;
    console.log(algorithmSelected);
  });

  btn.addEventListener("click", (e) => {
    buttonsAlgo.forEach((buttons) => {
      if ((buttons as HTMLButtonElement).className.includes("active-algo")) {
        (buttons as HTMLButtonElement).classList.toggle("active-algo");
      }
    });
    e.preventDefault();
    (btn as HTMLButtonElement).focus();
    (btn as HTMLButtonElement).classList.toggle("active-algo");
  });
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
  arrayNotSortedHistoryMap = [...arrayNotSorted];
  renderBars(arrayNotSorted);
});

async function renderBars(array: number[], animateTime = 0) {
  for (let i = 0; i < barsCount; i += 1) {
    let newBar = document.createElement("div");
    newBar.classList.add("bar");
    newBar.style.height = (array[i] * factorHeight) / 16 + "rem";
    barsContainer.appendChild(newBar);
    await sleep(animateTime);
  }
}

btnRandomizeArray.addEventListener("click", () => {
  arrayNotSorted = createRandomArray();
  arrayNotSortedHistoryMap = [...arrayNotSorted];
  btnSort.disabled = false;
  barsContainer.innerHTML = "";
  renderBars(arrayNotSorted);
});

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

btnSort.addEventListener("click", async () => {
  switch (algorithmSelected) {
    case "bubble": {
      btnSort.disabled = true;
      // resetCounters(counter);
      await bubbleSort(arrayNotSorted);
      btnSort.disabled = false;
      break;
    }
  }
});

const restartSorting = () => {
  btnSort.disabled = false;
  barsContainer.innerHTML = "";
  renderBars(arrayNotSortedHistoryMap, 15);
  arrayNotSorted = [...arrayNotSortedHistoryMap];
};

btnRestart.addEventListener("click", restartSorting);

export async function tabFocus(tabs) {
  console.log(tabs.length);
  if (btnSwitchAlgoClickCount === tabs.length) {
    btnSwitchAlgoClickCount = 0;
  }
  tabs[btnSwitchAlgoClickCount].click();
  tabs[btnSwitchAlgoClickCount].focus();
  btnSwitchAlgoClickCount += 1;
  console.log(btnSwitchAlgoClickCount);
  return btnSwitchAlgoClickCount;
}
