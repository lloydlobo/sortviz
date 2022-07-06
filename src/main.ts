import App from "./App.svelte";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;

let barsContainer = document.getElementById("barsContainer");
const counterDOM = document.createElement("output");

let btnRandomizeArray = document.getElementById("randomize_array_btn");
let btnSort = document.getElementById("btnSort");

// let algorithmSelect = document.getElementById("algo") as HTMLSelectElement;
let algorithmSelectTab = document.getElementsByClassName("btnAlgoNav");
const buttonsAlgo = [...algorithmSelectTab];

// let speed = document.getElementById("speed") as HTMLSelectElement;
// let speed = document.getElementById("speed") as HTMLInputElement;

let sliderSpeed = document.getElementById("speedSloMo") as HTMLDivElement;
sliderSpeed.addEventListener("mouseout", () => {
  factorSpeed = parseInt(sliderSpeed.ariaValueNow, 10);
});

let sliderCount = document.getElementById("slider") as HTMLDivElement;

let rangeMin = 1;
let rangeMax = parseInt(sliderCount.ariaValueMax, 10);
let barsCount = parseInt(sliderCount.ariaValueNow, 10);
let factorHeight = 2;
let factorSpeed = 100;
let arrayNotSorted = new Array(barsCount);
let arrayNotSortedHistoryMap = [];
let algorithmSelected = "";

let btnSwitchAlgoClickCount = 0;
// let counter = 0;
// counterDOM.innerHTML = counter.toString();
// const mainDOM = document.querySelector("main");
// mainDOM.appendChild(counterDOM);

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
    // btn.classList.toggle("active-algo");
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
  barsContainer.innerHTML = "";
  renderBars(arrayNotSorted);
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const bubbleSort = async (array) => {
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i - 1; j += 1) {
      if (j === 0) {
        // counter += 1;
        // counterDOM.innerHTML = counter.toString();
      }
      if (array[j] > array[j + 1]) {
        // reset color of bars visited during the previous iteration
        for (let k = 0; k < bars.length; k += 1) {
          if (k !== j && k !== j + 1) {
            (
              bars[k] as HTMLDivElement
            ).style.backgroundColor = `var(--clr-secondary)`;
          }
        }

        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        (
          bars[j] as HTMLDivElement
        ).style.backgroundColor = `var(--clr-tertiary)`;
        (bars[j] as HTMLDivElement).style.height =
          (array[j] * factorHeight) / 16 + "rem";

        (bars[j + 1] as HTMLDivElement).style.backgroundColor =
          "var(--clr-primary)";
        (bars[j + 1] as HTMLDivElement).style.height =
          (array[j + 1] * factorHeight) / 16 + "rem";

        await sleep(factorSpeed);
      }
    }
    await sleep(factorSpeed);
  }

  return array;
};

btnSort.addEventListener("click", () => {
  switch (algorithmSelected) {
    case "bubble": {
      // resetCounters(counter);
      bubbleSort(arrayNotSorted);
      break;
    }
  }
});
const btnRestart = document.getElementById("btnRestart") as HTMLButtonElement;
const resetCounters = (counter) => {
  counterDOM.innerHTML = "0";
};

const restartSorting = () => {
  console.log(arrayNotSortedHistoryMap);
  barsContainer.innerHTML = "";
  renderBars(arrayNotSortedHistoryMap, 15);
  arrayNotSorted = [...arrayNotSortedHistoryMap];
};

btnRestart.addEventListener("click", restartSorting);

function main() {
  let map = new Array(barsCount);
  // push renderBars output to this map
  map = []; // clear out map for next iteration
}
main();

const tabsAlgo = document.querySelectorAll("#algo");
export let tabs = [...tabsAlgo];

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
