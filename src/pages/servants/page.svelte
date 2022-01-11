<script type="ts">
  // Interfaces
  import type { Servant } from "../../interface/servant";
  import { MetaTags, JsonLd } from "svelte-meta-tags";

  // Variable
  export let servant: Servant;
  export let tab: string;

  let ascensiones = false;
  let backgroundChange = false;

  // Components
  import Hero from "./components/hero.svelte";
  import Tabs from "./components/tabs.svelte";
  import Modal from "./components/modal.svelte";
  import ChangeBackground from "./components/changeBackground.svelte";
</script>

<svelte:head>
  <MetaTags
    title="{servant.info.nameEn} | Grand Wiki"
    description="{servant.info.nameEn} | {servant.info.className} | {'★'.repeat(
      servant.info.rarity
    )}"
    canonical="/servant/{servant.no}"
    openGraph={{
      url: `/servant/${servant.no}`,
      title: `${servant.info.nameEn} | Grand Wiki`,
      description: `${servant.info.nameEn} | ${
        servant.info.className
      } | ${"★".repeat(servant.info.rarity)}`,
      images: [
        { url: servant.ascension[0], alt: "Ascension 1º" },
        { url: servant.ascension[1], alt: "Ascension 2º" },
        { url: servant.ascension[2], alt: "Ascension 3º" },
        { url: servant.ascension[3], alt: "Ascension 4º" },
      ],
      site_name: "Proyecto Grand Wiki | Proyecto Grand Order",
    }}
    twitter={{
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    }}
  />
</svelte:head>

<div>
  <Hero
    bind:changeBackground={backgroundChange}
    id={servant.no}
    className={servant.info.className}
    rarity={servant.info.rarity}
    figure={servant.figure}
  />
  <Tabs {servant} {tab} bind:ascensiones />
</div>

<!-- Modal -->
<Modal {servant} bind:estado={ascensiones} />

<!-- Change Background -->
<ChangeBackground id={servant.no} bind:mostrar={backgroundChange} />

<style>
</style>
