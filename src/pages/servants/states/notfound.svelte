<script type="ts">
  // Lib/s
  import { fade } from "svelte/transition";
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";

  window.history.replaceState({}, "", "/error/");

  // Variable/s
  export let error: string;

  // Other/s
  console.log(error);
  /**
   * Redirect user to index
   * @type void
   */
  onMount(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });
</script>

<svelte:head>
  <title>Error | Grand Wiki</title>
</svelte:head>

<div
  class="container-fluid error"
  transition:fade={{ duration: 1000 }}
  style="display: block; margin: auto; text-align:center;"
>
  <div class="error-block" />

  <img
    alt="404"
    style="height:300px;"
    src="https://apps.atlasacademy.io/db/static/media/figure_016.1ba89c04.png"
  />
  {#if error !== "Not found"}
    <h1 style="color: white;">Error</h1>
    <p class="error-text">{error}</p>
  {:else}
    <h1 style="color: white;">No se ha encontrado</h1>
  {/if}
  <p>
    <b>Master</b> la pagina que buscas no se encuentra disponible, en unos segundos
    5 segundos seras redirido al inicio.
  </p>

  <div class="error-block" />
</div>

<style>
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-15px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  .error-text {
    word-wrap: break-word;
    background: #8c2121;
    padding: 10px;
    border-radius: 5px;
    margin-left: 30%;
    margin-right: 30%;
  }

  .error-block {
    padding: 10px;
    background: #2c2f33;
    margin-left: 18%;
    margin-right: 18%;
  }

  .error {
    display: block;
    box-shadow: inset 0px 1px 80px black;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #23272a;
    color: white;
  }

  .error img {
    margin-top: -60px;
    animation: float 6s ease-in-out;
    animation-iteration-count: infinite;
  }
</style>
