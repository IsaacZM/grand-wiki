<script type="ts">
  // Lib/s
  import { onMount } from "svelte";

  // Types
  import type { Servant } from "../../interface/servant";

  // Variables
  export let id;
  export let tab = "stats";
  let servant: Servant;

  // States
  // import Loading from "./states/loading.svelte";
  // import Notfound from "./states/notfound.svelte";
  import TransitionModule from "../../components/TransitionModule.svelte";

  // Pages
  import Page from "./page.svelte";
  import { navigate } from "svelte-routing";

  const getServant = async (id: string): Promise<void> => {
    try {
      const request = await fetch("/assets/servants/" + id + ".json");

      if (request.status === 404) {
        throw Error("Not found");
      }

      const servantResponse: Servant = await request.json();
      servant = servantResponse;
    } catch (e) {
      navigate("/error/" + e.message);
    }
  };

  onMount(() => getServant(id));
</script>

<svelte:head>
{#if servant}
      <!-- Primary Meta Tags -->
      <title>{servant.info.nameEn || servant.info.nameJp || servant.info.nameEn} | Proyecto
        Grand Order</title>
      <meta name="title" content="Proyecto Grand Wiki | Proyecto Grand Order">
      <meta name="description" content="Wikia en español del juego de movil Fate / Grand Order.">
    
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://wiki.proyectograndorder.es">
      <meta property="og:title" content="{servant.info.nameEn || servant.info.nameJp || servant.info.nameEn} | Proyecto
      Grand Order">
      <meta property="og:description" content="Wikia en español del juego de movil Fate / Grand Order.">
      <meta property="og:image" content={"https://image.thum.io/get/auth/54712-https:/" + location.href} >
    
      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="https://wiki.proyectograndorder.es">
      <meta property="twitter:title" content="{servant.info.nameEn || servant.info.nameJp || servant.info.nameEn} | Proyecto
      Grand Order">
      <meta property="twitter:description" content="Wikia en español del juego de movil Fate / Grand Order.">
      <meta property="twitter:image" content={"https://image.thum.io/get/auth/54712-https:/" + location.href} >
      {/if}
</svelte:head>

{#if servant}
  <TransitionModule>
    <Page {servant} {tab} />
  </TransitionModule>
{/if}

<style>
</style>
