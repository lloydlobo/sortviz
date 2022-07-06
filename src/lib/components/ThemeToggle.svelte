<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export function setDefaultTheme() {
    dispatch("defaultTheme", {
      theme: "default",
    });
  }

  export function setPurpleTheme() {
    dispatch("purpleTheme", {
      theme: "purple",
    });
  }

  // export let theme = "default";
</script>

<div class="theme-buttons flex gap-4">
  <button on:click={setDefaultTheme}> Default </button>
  <button on:click={setPurpleTheme}> Purple </button>
</div>
