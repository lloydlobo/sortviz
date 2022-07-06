<script lang="ts">
  // https://svelte.dev/tutorial/event-forwarding
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

<div class="theme-buttons flex gap-4 rounded-full bg-sky-100 px-4">
  <button on:click={setDefaultTheme}><i class="fa-solid fa-sun" /></button>
  <button on:click={setPurpleTheme}><i class="fa-solid fa-moon" /></button>
</div>

<style type="text/css">
  .theme-buttons {
    /* background-color: var(--clr-secondary); */
  }
  button {
    color: var(--clr-secondary);
    @apply rounded;
  }
</style>
