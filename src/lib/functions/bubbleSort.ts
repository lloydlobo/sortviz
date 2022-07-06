import { factorHeight, sleep, factorSpeed } from "../../main";

export const bubbleSort = async (array) => {
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
