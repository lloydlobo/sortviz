<script lang="ts">
  import Footer from "./lib/components/Footer.svelte";
  import Navbar from "./lib/components/NavBar.svelte";
  import renderBars from "./lib/components/Bars.svelte";
  import Range from "./lib/components/vizualizer/Range.svelte";
  // import ThemeToggle from "./lib/components/ThemeToggle.svelte";
  let sliderValueForSpeed = 50;
  let sliderValueForCount = 50;
  let theme = "default";

  const toggleTheme = (e) => {
    console.log("hi");
    console.log(e.detail);
    if (theme === "default") {
      theme = "purple";
    } else {
      theme = "default";
    }
  };
</script>

<header class="header">
  <Navbar
    on:defaultTheme={(event) => (theme = event.detail.theme)}
    on:purpleTheme={(event) => (theme = event.detail.theme)}
  />
</header>
<main class="items-center text-center">
  <h1 class="p-3 text-lg font-bold text-sky-900">
    a sorting algorithm vizualizer!
  </h1>

  <div class="visualizer-wrapper relative flex h-full flex-col">
    <div
      class="bars-container my-0 mx-auto mb-auto flex w-11/12 flex-1 flex-col items-center py-5 px-0"
    >
      <div id="barsContainer" class="flex flex-row bg-slate-50  " />
    </div>
    <div
      class="controls grid w-screen items-center justify-center gap-2 bg-slate-100 p-4 text-sky-900 sm:flex sm:flex-row sm:flex-wrap sm:justify-around"
    >
      <div
        class="buttons-sort-and-randomize flex min-w-fit items-center justify-center gap-4"
      >
        <button
          on:click={() => renderBars}
          id="btnSort"
          class="button-sort relative rounded-full bg-sky-400"
          alt="Sort"
          ><i
            class="fa-solid fa-arrow-up-wide-short aspect-square rotate-90 rounded-full p-4  text-2xl leading-[0] text-sky-50"
          />
        </button>
        <div class="randomize">
          <button id="randomize_array_btn" class="grid">
            <i class="fa-solid fa-shuffle" />
            <span class="text-sm">Randomize</span>
          </button>
        </div>
      </div>

      <div class="range-count-speed flex flex-wrap items-center gap-4">
        <div class="sliders count-bars">
          <div class:purple-theme={theme === "purple"}>
            <label for="slider">Array Count</label>
            <div class="flex">
              <Range
                on:change={(e) => (sliderValueForCount = e.detail.value)}
                id="slider"
                min={50}
              />
              <output for="slider">
                {sliderValueForCount}
              </output>
            </div>
          </div>
        </div>

        <div class="sliders sort-speed">
          <div class:purple-theme={theme === "purple"}>
            <label for="speedSloMo">Slo-Mo</label>
            <div class="flex">
              <Range
                on:change={(e) => (sliderValueForSpeed = e.detail.value)}
                id="speedSloMo"
                max={1500}
              />
              <output>
                {sliderValueForSpeed}
              </output>
            </div>
          </div>
        </div>
      </div>

      <div class="controls-settings">
        <div class="restart flex place-content-center items-center">
          <button id="btnRestart" class="grid"
            ><i class="fa-solid fa-rotate-left" />

            <span class="text-sm">Restart</span>
          </button>
        </div>
      </div>
    </div>
    <!-- <DisplayAlgo /> -->
    <!-- <Controller /> -->
  </div>
  <!-- <Counter /> -->
</main>

<Footer />

<style>
  .container {
    width: min(100% - 2rem, 80vw);
    margin-inline: auto;
  }
  .purple-theme {
    --track-focus: #c368ff;
    --track-highlight-bgcolor: #c368ff;
    --track-highlight-bg: linear-gradient(90deg, #c368ff, #c965ff);
    --thumb-holding-outline: rgba(191, 102, 251, 0.3);
    --tooltip-bgcolor: #c368ff;
    --tooltip-bg: linear-gradient(45deg, #c368ff, #c965ff);
  }

  .sliders {
    display: flex;

    /* width: min(36% - 2rem, 33vw); */
  }

  label {
    margin: 8px;
    font-size: 16px;
    font-weight: 600;
  }
  /* https://aerotwist.com/blog/flip-your-animations/ */
</style>
