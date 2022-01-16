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

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Proyecto Grand Wiki | Proyecto Grand Order</title>
  <meta name="title" content="Proyecto Grand Wiki | Proyecto Grand Order">
  <meta name="description" content="Wikia en español del juego de movil Fate / Grand Order.">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://wiki.proyectograndorder.es">
  <meta property="og:title" content="Proyecto Grand Wiki | Proyecto Grand Order">
  <meta property="og:description" content="Wikia en español del juego de movil Fate / Grand Order.">
  <meta property="og:image" content={"https://image.thum.io/get/auth/54712-https:/" + location.href} >

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://wiki.proyectograndorder.es">
  <meta property="twitter:title" content="Proyecto Grand Wiki | Proyecto Grand Order">
  <meta property="twitter:description" content="Wikia en español del juego de movil Fate / Grand Order.">
  <meta property="twitter:image" content={"https://image.thum.io/get/auth/54712-https:/" + location.href} >
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
