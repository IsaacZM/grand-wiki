<script>
  import { fade } from "svelte/transition";
  import { setBackgroundCache } from "../../../scripts/background";

  // Evento
  let changeBackgroundEvent = new Event("bgChange");

  // Variables
  export let mostrar = false;
  export let id;

  const changeBackground = (e) => {
    const form = e.target;
    const formData = new FormData(form);
    const urlImage = Array.from(formData.values())[0];
    setBackgroundCache(urlImage, id);
    window.dispatchEvent(changeBackgroundEvent);
  };
</script>

{#if mostrar}
  <div transition:fade={{ duration: 300 }} class="background">
    <!-- Close -->
    <div class="close">
      <button on:click={() => (mostrar = false)}>
        <i class="bi bi-x" />
      </button>
    </div>
    <!-- Formulario -->
    <div class="container">
      <div class="card">
        <div class="card-body">
          <form on:submit|preventDefault={changeBackground}>
            <div class="mb-3">
              <input
                type="url"
                class="form-control"
                id="urlImage"
                name="ChangeBackground"
                aria-describedby="urlTip"
                placeholder="https://assets.atlasacademy.io/GameData/JP/Back/back118700_1344_626.png"
              />
              <div id="urlTip" class="form-text">
                Este fondo se guardara en la cache de su dispositivo si ocurre
                algun error le recomendamos que borre la cache de su
                dispositivo.
              </div>
            </div>
            <button type="submit" class="btn btn-success w-100 custom-btn"
              >Cambiar</button
            >
          </form>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .background {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    height: -webkit-fill-available;
    right: 0;
    display: flex;
    background: #212529d1;
    z-index: 9999;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .card {
    background: #23272a;
    border-radius: 0;
    padding: 20px;
  }
  div#urlTip {
    color: white;
  }

  .custom-btn {
    border-radius: 0;
  }

  input#urlImage {
    background: #2c2f33;
    border: none !important;
    box-shadow: none !important;
    padding: 15px 20px;
    color: white;
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
