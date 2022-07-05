<script lang="ts">
  let time;
  $: time = new Date().getFullYear();

  const tabs = [
    {
      name: "Quick",
      id: "tabQuick",
      algorithm: "quickSort",
    },

    {
      name: "Merge",
      id: "tabMerge",
      algorithm: "mergeSort",
    },
    {
      name: "Heap",
      id: "tabHeap",
      algorithm: "heapSort",
    },
    {
      name: "Selection",
      id: "tabSelection",
      algorithm: "selectionSort",
    },
    {
      name: "Insertion",
      id: "tabInsertion",
      algorithm: "insertionSort",
    },
    {
      name: "Bubble",
      id: "tabBubble",
      algorithm: "bubbleSort",
    },
    {
      name: "All",
      id: "tabAll",
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
  class="tabs my-2 flex  flex-wrap items-center justify-between rounded bg-slate-100 px-10 align-middle text-sm font-light shadow-lg"
>
  {#each tabs as tab}
    <button
      value={tab.algorithm}
      on:click={() => console.log(tab.id)}
      class="min-h-[48px]  self-center border-indigo-500 px-[12px] py-[6px] text-center text-base font-medium uppercase text-indigo-900 transition-all duration-100 ease-in-out hover:border-b-2 hover:text-indigo-700 sm:w-40"
      >{tab.name}</button
    >
  {/each}
</div>

<style>
  .tabs {
    grid-template-columns: repeat(auto-fit, minmax(clamp(30%, 1vw, 10%), 1fr));
  }
</style>
