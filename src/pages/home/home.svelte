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
  // https://image.thum.io/get/auth/54712-https:/https://wiki.proyectograndorder.es
  // Components
  import Hero from "./components/hero.svelte";
  import Search from "./components/search.svelte";
  import Filter from "./components/filter.svelte";
  import Servants from "./components/servants.svelte";
</script>

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
