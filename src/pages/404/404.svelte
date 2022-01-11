<script type="ts">
  // Lib/s
  import { fade } from "svelte/transition";

  // Component/s
  import Notfound from "../servants/states/notfound.svelte";

  export let message = "";
</script>

<svelte:head>
  <title>Error | Proyecto Grand Wiki</title>
</svelte:head>

<main>
  <div transition:fade={{ duration: 1000, delay: 1000 }}>
    <Notfound error={message} />
  </div>
</main>

<style>
</style>
