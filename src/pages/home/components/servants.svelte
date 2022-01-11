<script type="ts">
  export let filteredServants: index[];

  // Interfaces
  import type { index } from "../../../interface/index";

  // Libs
  import { fade } from "svelte/transition";

  // Components
  import Card from "./card.svelte";

  // Page index
  let pageIndex = 0;
  let buttonsIndex = 0;

  // Interfaces
  let buttons: number[] = [];
  let paginateServants: ArrayLike<index[]> = [];
  let paginateServantsButtons: ArrayLike<number[]> = [];

  // Servants Functions
  const pagination = () => {
    let servantsToPaginate = filteredServants;

    // Dividir dicho array
    let pages = [];

    // Number the servants per page
    const servantsPerPage = 12;

    // Divide array into pages
    for (let i = 0; i < servantsToPaginate.length; i += servantsPerPage) {
      let page: index[] = servantsToPaginate.slice(i, i + servantsPerPage);
      pages.push(page);
    }

    // Define default length of buttons
    buttons.length = pages.length;

    // Fill array with item for iterate
    buttons.fill(0);

    // Page for servants
    paginateServants = pages;
  };

  const changeIndex = (index) => {
    pageIndex = index;
  };

  // Buttons functions
  const paginationButtons = () => {
    // Aqui va las paginas dividas
    let pages = [];

    // Numero de botones por pagina
    const buttonsPerPage = 5;

    // Dividimos la paginas por botones
    for (let i = 0; i < buttons.length; i += buttonsPerPage) {
      let page: number[] = buttons.slice(i, i + buttonsPerPage);
      pages.push(page);
    }

    // Button asingn
    paginateServantsButtons = pages;
  };

  const next = () => {
    buttonsIndex =
      buttonsIndex + 1 < paginateServantsButtons.length ? ++buttonsIndex : 0;
  };

  const prev = () => {
    buttonsIndex =
      buttonsIndex > 0 ? --buttonsIndex : paginateServantsButtons.length - 1;
  };

  // Reactive if
  $: if (filteredServants.length > 0) {
    pageIndex = 0;
    pagination();
  }

  $: if (paginateServants.length > 0) {
    buttons.length === paginateServants.length;
    buttons.fill(0);
    buttons = buttons.map((val, index) => index);
  }

  $: if (buttons.length > 0) {
    buttonsIndex = 0;
    paginationButtons();
  }
</script>

{#if filteredServants.length === 0}
  <div class="container pt-5 pb-5 no-found" in:fade={{ duration: 1000 }}>
    <h1>Sin resultados!</h1>
  </div>
{:else}
  {#key paginateServants[pageIndex]}
    <div
      transition:fade={{ duration: 500, delay: 500 }}
      class="grid-container container p-5"
    >
      {#if paginateServants.length > 0}
        {#each paginateServants[pageIndex] as servant, index}
          <Card name={servant.name} id={servant.id} icon={servant.icon} />
        {/each}
      {/if}
    </div>

    <div class="container-fluid">
      <nav transition:fade={{ duration: 250, delay: 0 }}>
        {#key paginateServantsButtons[buttonsIndex]}
          <ul class="pagination pagination-servants">
            <li class="page-item">
              <button class="page-link" on:click={() => (buttonsIndex = 0)}>
                <i class="bi bi-chevron-double-left" />
              </button>
            </li>

            <li class="page-item">
              <button class="page-link" on:click={prev}> ... </button>
            </li>
            {#each paginateServantsButtons[buttonsIndex] as button}
              <li class="page-item">
                <button on:click={() => changeIndex(button)} class="page-link"
                  >{button + 1}</button
                >
              </li>
            {/each}

            <li class="page-item">
              <button class="page-link" on:click={next}> ... </button>
            </li>

            <li class="page-item">
              <button
                class="page-link"
                on:click={() =>
                  (buttonsIndex = paginateServantsButtons.length - 1)}
              >
                <i class="bi bi-chevron-double-right" />
              </button>
            </li>
          </ul>
        {/key}
      </nav>
    </div>
  {/key}
{/if}

<style>
  .pagination-servants {
    justify-content: center;
    gap: 15px;
    padding: 10px;
    flex-wrap: wrap;
  }

  .pagination-servants button {
    border-radius: 50px;
    background: #23272a;
    height: 44px;
    width: 44px;
    border: 0px;
  }

  .pagination-servants button:focus {
    filter: drop-shadow(0px 0px 5px rgb(235, 235, 115));
  }

  .no-found {
    text-align: center;
    color: white;
  }

  .grid-container {
    display: grid;
    gap: 1rem;
    grid-auto-flow: dense;
    grid-auto-rows: 20rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    justify-items: center;
  }
</style>
