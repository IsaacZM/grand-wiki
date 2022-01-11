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
    <title
      >{servant.info.nameEn || servant.info.nameJp || servant.info.nameEn} | Proyecto
      Grand Order</title
    >
    <meta
      name="title"
      content="{servant.info.nameEn ||
        servant.info.nameJp ||
        servant.info.nameEn} | Proyecto
      Grand Order"
    />
    <meta
      name="description"
      content="{servant.info.nameEn ||
        servant.info.nameJp ||
        servant.info.nameEn} | Proyecto
      Grand Order"
    />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="/servant/{servant.no}" /><meta
      property="og:title"
      content="{servant.info.nameEn ||
        servant.info.nameJp ||
        servant.info.nameEn} | Proyecto
      Grand Order"
    />
    <meta
      property="og:description"
      content="{servant.info.nameEn ||
        servant.info.nameJp ||
        servant.info.nameEn} | Proyecto
      Grand Order"
    />
    <meta property="og:image" content={servant.ascension[2]} />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="/servant/{servant.no}" />
    <meta
      property="twitter:title"
      content="{servant.info.nameEn ||
        servant.info.nameJp ||
        servant.info.nameEn} | Proyecto
      Grand Order"
    />
    <meta
      property="twitter:description"
      content="{servant.info.nameEn ||
        servant.info.nameJp ||
        servant.info.nameEn} | Proyecto
      Grand Order"
    />
    <meta property="twitter:image" content={servant.ascension[2]} />
  {/if}
</svelte:head>

{#if servant}
  <TransitionModule>
    <Page {servant} {tab} />
  </TransitionModule>
{/if}

<style>
</style>
