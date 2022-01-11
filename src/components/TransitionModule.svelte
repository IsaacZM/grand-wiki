<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { scrollToTop } from "svelte-scrollto";

  $: show = false;
  onMount(() => (show = true));
</script>

{#if show}
  <div
    in:fly={{ y: -50, duration: 250, delay: 300 }}
    out:fly={{ y: -50, duration: 250 }}
  >
    <slot />
  </div>
{/if}

<style>
</style>
