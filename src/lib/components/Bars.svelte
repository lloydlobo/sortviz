<script lang="ts">
  // import writable from "./svelte";

  // export let barsContainer;
  export let id = "barsContainer";
  export let className = "bars_container";
  export function renderBars(array, numOfBars, heightFactor) {
    for (let i = 0; i < numOfBars; i += 1) {
      let bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = array[i] * heightFactor + "px";
      document.getElementById(id).appendChild(bar);
    }
  }
</script>

<div {id} class={className}>
  <slot />
</div>

<style>
  .bar {
    width: 0.618rem; /* 10px approx */
    background-color: teal;
    border-radius: 2px;
    margin-inline: 2px;
  }

  div {
    display: flex;
    align-self: center;
    padding: 2rem;
    margin-inline: auto;
    justify-content: center;
  }
</style>
