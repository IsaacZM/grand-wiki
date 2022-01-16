<script type="ts">
  // Interfaces
  import type { index } from "../../interface/index";

  // Variables
  export let servants: index[];
  export let filteredServants: index[];
  export let refresh: string = "";
  export let LastestServant: index;
  
  let lastServant: number;
  
  $: if(LastestServant !== undefined) {
    lastServant = LastestServant.id;
  }

  // Components
  import Hero from "./components/hero.svelte";
  import Navbar from "./components/navbar.svelte";
  import Search from "./components/search.svelte";
  import Filter from "./components/filter.svelte";
  import Servants from "./components/servants.svelte";
</script>

<svelte:head>
  <title>Proyecto Grand Wiki | Proyecto Grand Order</title>
</svelte:head>

<main id="home">
  <div id={refresh}>
    <Hero servantId={lastServant} />
    <!-- <AlgoliaSearch servants={servantsToSearch} /> -->
    <Search bind:servants bind:filteredServants />
    <Filter {servants} bind:filteredServants />
    <Servants {filteredServants} />
  </div>
</main>
<div class="destroy" />

<style>
  .destroy {
    position: absolute;
  }
</style>
