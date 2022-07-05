<script lang="ts">
  import logo from "./assets/svelte.png";
  import Bars from "./lib/components/Bars.svelte";
  import Controller from "./lib/components/Controller.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import Navbar from "./lib/components/NavBar.svelte";
  import Counter from "./lib/Counter.svelte";

  import renderBars from "./lib/components/Bars.svelte";
  // const array = [1, 2, 3];
  // function main() {
  // const createBars = new renderBars(array, 1);
  // }

  let count = "";
  $: count = "50";
  let countHistory = 0;
  const increment = () => {
    countHistory += 1;
  };
</script>

<header class="header container mx-auto ">
  <Navbar />
</header>
<main class="grid place-items-center items-center text-center">
  <div class="container relative">
    <h1 class="p-3 text-lg font-bold">an algorithm vizualizer!</h1>
    <Bars id="barsContainer" className="flex">
      <!-- {#each count as i}
        <div class="bar" />
      {/each} -->
      <div class="bar" />
      <div class="bar" />
      <div class="bar" />
      <div class="bar" />
      <div class="bar" />
    </Bars>
    <div class="controls flex flex-wrap items-center justify-center gap-2">
      <div class="count-bars">
        <input
          bind:value={count}
          on:change={increment}
          type="range"
          id="slide"
          min="50"
          max="150"
          step="5"
        />
        <span>{count}</span>
        <p>{countHistory}</p>
      </div>

      <select name="select-speed" id="speed">
        <option value="100">Slow</option>
        <option value="50">Medium</option>
        <option value="10">Fast</option>
      </select>
      <select name="" id="algo">
        <option value="bubble">Bubble Sort</option>
        <option value="insertion">Insertion Sort</option>
        <option value="heap">Heap Sort</option>
        <option value="merge">Merge Sort</option>
        <option value="quick">Quick Sort</option>
      </select>
      <button id="randomize_array_btn">Randomize Array</button>
      <button on:click={() => renderBars} id="sort_btn">Sort</button>
    </div>
    <!-- <DisplayAlgo /> -->
    <Controller />
  </div>
  <Counter />
</main>

<Footer />

<style>
  .container {
    width: min(100%-2rem, 80vw);
  }

  /* https://aerotwist.com/blog/flip-your-animations/ */
</style>
