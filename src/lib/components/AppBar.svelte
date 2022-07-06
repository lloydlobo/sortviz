<script lang="ts">
  let time;
  $: time = new Date().getFullYear();

  const tabs = [
    {
      name: "Quick",
      id: "algo",
      algorithm: "quick",
    },

    {
      name: "Merge",
      id: "algo",
      algorithm: "merge",
    },
    {
      name: "Heap",
      id: "algo",
      algorithm: "heap",
    },
    {
      name: "Selection",
      id: "algo",
      algorithm: "selection",
    },
    {
      name: "Insertion",
      id: "algo",
      algorithm: "insertion",
    },
    {
      name: "Bubble",
      id: "algo",
      algorithm: "bubble",
    },
    {
      name: "All",
      id: "algo",
      algorithm: "allAlgorithms",
    },
  ];

  const sortingAlgorithms = [
    {
      title: "Quick",
    },
  ];
</script>

<!-- <div class="time">{time}</div> -->
<div
  class="tabs my-2 flex  flex-wrap items-center justify-between rounded bg-slate-100 px-10 align-middle text-sm font-light shadow-lg transition-all duration-1000 ease-out"
>
  {#each tabs as tab}
    <button
      value={tab.algorithm}
      id={tab.id}
      class="btnAlgoNav min-h-[48px] self-center border-sky-300 px-[12px] py-[6px] text-center text-base font-medium uppercase text-sky-900 transition-all duration-100 ease-in-out hover:border-b-2 hover:text-sky-700 focus:animate-pulse focus:border-b-2 focus:text-sky-500 sm:w-40 "
      >{tab.name}</button
    >
  {/each}
</div>

<style>
  .tabs {
    grid-template-columns: repeat(auto-fit, minmax(clamp(30%, 1vw, 10%), 1fr));
  }

  /* button.btnAlgoNav:focus {
    color: white;
  } */
</style>
