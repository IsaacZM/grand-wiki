<script>
  export let figures = [];
</script>

<div
  id="carouselServant"
  data-bs-interval="false"
  class="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <!-- Indicadores -->
  <div class="carousel-indicators">
    {#each figures as ascension, index}
      {#if index === 0}
        <button
          type="button"
          data-bs-target="#carouselServant"
          data-bs-slide-to={index}
          class="active"
          aria-current="true"
          aria-label="Ascension {index + 1}">{index + 1}</button
        >
      {:else}
        <button
          type="button"
          data-bs-target="#carouselServant"
          data-bs-slide-to={index}
          aria-current="true"
          aria-label="Ascension {index + 1}">{index + 1}</button
        >
      {/if}
    {/each}
  </div>
  <!-- Sliders -->
  <div class="carousel-inner">
    {#each figures as ascension, index}
      {#if index === 0}
        <div class="carousel-item active effect">
          <div class="servant" style="background-image: url({ascension});" />
        </div>
      {:else}
        <div class="carousel-item effect">
          <div class="servant" style="background-image: url({ascension});" />
        </div>
      {/if}
    {/each}
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselServant"
    data-bs-slide="prev"
  >
    <img height="60px" alt="arrowLeft" src="/assets/images/arrowLeft.png" />
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselServant"
    data-bs-slide="next"
  >
    <img height="60px" alt="arrowRight" src="/assets/images/arrowRight.png" />
  </button>
</div>

<style>
  .servant {
    height: 400px;
    width: auto;
    background-size: 535px;
    background-repeat: no-repeat;
    background-position: center top;
    transition: opacity 1s;
    opacity: 1;
    filter: drop-shadow(1px 2px 3px black);
  }

  .carousel-indicators {
    top: 15px;
  }

  .carousel-indicators [data-bs-target] {
    width: 30px;
    height: 30px;
    text-indent: 0;
    color: white;
    background-color: #383838;
  }

  .effect {
    transition: transform 1.2s ease, opacity 0.25s ease-out !important;
  }
</style>
