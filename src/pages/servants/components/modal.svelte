<script>
  export let estado = false;
  export let servant;

  import { fade } from "svelte/transition";

  const cambiarEstado = () => {
    estado = false;
  };
</script>

{#if estado}
  {#key estado}
    <div transition:fade={{ duration: 400 }} class="foreground">
      <div class="close">
        <button on:click={cambiarEstado}>
          <i class="bi bi-x" />
        </button>
      </div>
      <div class="container carrousel-container">
        <div
          id="carouselExampleIndicators"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-keyboard="true"
          data-bs-interval="false"
        >
          <div class="carousel-inner">
            {#each servant.ascension as ascension, index}
              {#if index === 0}
                <div class="carousel-item active">
                  <img
                    src={ascension}
                    height="550px"
                    class="d-block w-100"
                    loading="lazy"
                    alt="ascension {index + 1}"
                  />
                </div>
              {:else}
                <div class="carousel-item">
                  <img
                    src={ascension}
                    loading="lazy"
                    class="d-block w-100"
                    height="550px"
                    alt="ascension {index + 1}"
                  />
                </div>
              {/if}
            {/each}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <img
              height="60px"
              alt="arrowLeft"
              src="/assets/images/arrowLeft.png"
            />
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <img
              height="60px"
              alt="arrowRight"
              src="/assets/images/arrowRight.png"
            />
          </button>
        </div>
      </div>
    </div>
  {/key}
{/if}

<style>
  .foreground {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    height: -webkit-fill-available;
    right: 0;
    opacity: var(--opacity);
    pointer-events: var(--point-event);
    display: flex;
    background: #212529d1;
    z-index: 9999;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .carrousel-container {
    text-align: center;
    width: 550px;
  }

  .carousel-item img {
    object-fit: contain;
  }

  .close button {
    background: none;
    color: white;
    box-shadow: none;
    border: none;
    font-size: 50px;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
