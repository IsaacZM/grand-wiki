<script type="ts">
  // Lib/s
  import { onMount } from "svelte";
  import { seo } from "../../components/stores"
  

  // Types
  import type { Servant } from "../../interface/servant";

  // Variables
  export let id: string;
  export let tab = "stats";
  let servant: Servant;

  seo.set({
    title: `${id} | Proyecto Grand Order`,
    description: "Wikia en español del juego de movil Fate / Grand Order.",
  });

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
      seo.set({
        title: ``,
        description: "Wikia en español del juego de movil Fate / Grand Order.",
      });
    } catch (e) {
      navigate("/error/" + e.message);
    }
  };

  onMount(() => getServant(id));
</script>

<svelte:head>
  {#if servant}
  <title>{servant.info.nameEn || servant.info.nameJp} | Proyecto Grand Order</title>
  {/if}
</svelte:head>

{#if servant} 
  <TransitionModule>
    <Page {servant} {tab} />
  </TransitionModule>
{/if}

<style>
</style>
