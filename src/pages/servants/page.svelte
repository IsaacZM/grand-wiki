<script type="ts">
  // Interfaces
  import type { Servant } from "../../interface/servant";

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
