<script type="ts">
  export let servants: any[];
  export let filteredServants: any[];

  import Alert from "./alert.svelte";

  let searchTerm = "";
  var timeToUpdate = null;

  const updateFilter = () => {
    clearTimeout(timeToUpdate);
    timeToUpdate = setTimeout(
      () =>
        (filteredServants = servants.filter(
          (svt) =>
            svt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            svt.akas.includes(searchTerm) ||
            svt.group.includes(searchTerm)
        )),
      500
    );
  };
</script>

<Alert>
  <b>Aviso</b> Esta pagina esta en version beta aun puede contener errores, la pagina
  aun no pose actualizacion automatica Pero en la version final estara completamente
  traducido y actualizado, al momento.
</Alert>

<div class="container pt-5 pl-5 pr-5 search-servant shadow-sm">
  <div class="input-group flex-nowrap">
    <input
      type="text"
      bind:value={searchTerm}
      on:input={updateFilter}
      class="form-control"
      placeholder="Altria pendragon"
      aria-describedby="addon-wrapping"
    />
  </div>
</div>

<style>
  .search-servant input {
    background-color: #23272a;
    border: none !important;
    color: white;
    box-shadow: none !important;
    padding: 15px 25px;
  }
</style>
