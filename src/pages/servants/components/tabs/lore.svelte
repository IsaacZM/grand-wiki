<script>
  export let servant;
  import Alert from "../../../home/components/alert.svelte";

  console.log(servant.profiles);
</script>

{#each servant.profiles as { descriptionEn, title, conditionEn }, index}
  <div class="accordion-item">
    <h2 class="accordion-header" id="skill-{index}">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#profile-{index}"
        aria-expanded="false"
        aria-controls="Profile {index}"
      >
        Perfil {index + 1}
      </button>
    </h2>

    <div
      id="profile-{index}"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#profile-{index}"
    >
      <div class="accordion-body">
        <div class="container description-card">
          <h3>{title}</h3>
          <hr />
          {descriptionEn}
          {#if conditionEn}
            <div>
              <hr />
              Para desbloquear esta linea de dialogo debe completa los siguiente
              requisitos:
              <li>{conditionEn}</li>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/each}

<style>
  .description-card {
    background: #1b1a1a;
    padding: 1rem;
    border-radius: 5px;
  }
  .accordion-item,
  .accordion-button {
    color: white;
    background-color: #23272a;
    border: 0;
    box-shadow: none !important;
  }

  .accordion-button::after {
    filter: brightness(10);
  }
</style>
