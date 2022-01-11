<script type="ts">
  //@ts-ignore
  import * as lib from "../libs/filter";

  let raritySelects = [];
  let classesSelects = [];

  export let servants: any[];
  export let filteredServants: any[];

  const updateFilter = () => {
    filteredServants = servants
      .filter((svt) =>
        classesSelects.length > 0
          ? classesSelects.includes(svt.className.toLowerCase())
          : true
      )
      .filter((svt) =>
        raritySelects.length > 0
          ? raritySelects.includes(String(svt.rarity))
          : true
      );
  };

  const select = lib.selected;

  const updateList = (e) =>
    select(classesSelects, e, (x) => {
      classesSelects = x;
      updateFilter();
    });

  const rarityFilter = (e) =>
    lib.selectedRarity(raritySelects, e, (x) => {
      raritySelects = x;
      updateFilter();
    });

  const updateSortListUp = () => {
    filteredServants = filteredServants.sort((a, b) => {
      return b.id - a.id;
    });
  };

  const updateSortListDown = () => {
    filteredServants = filteredServants.sort((a, b) => {
      return a.id - b.id;
    });
  };
</script>

<!-- Clases -->
<div class="container filter-nav">
  <div class="d-flex container-buttons">
    <button
      style="background-image: url(
                https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_1.png)"
      on:click={updateList}
      data-class="saber"
      class="servant-buttons"
    />
    <button
      style="background-image: url(
                https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_2.png)"
      data-class="archer"
      on:click={updateList}
      class="servant-buttons"
    />
    <button
      style="background-image: url(
            https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_3.png)"
      data-class="lancer"
      on:click={updateList}
      class="servant-buttons"
    />
    <button
      style="background-image: url(
            https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_4.png)"
      data-class="rider"
      on:click={updateList}
      class="servant-buttons"
    />
    <button
      style="background-image: url(
            https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_5.png)"
      data-class="caster"
      on:click={updateList}
      class="servant-buttons"
    />
    <button
      style="background-image: url(
                https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_6.png)"
      data-class="assassin"
      on:click={updateList}
      class="servant-buttons"
    />
    <button
      style="background-image: url(
            https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_7.png)"
      data-class="berserker"
      on:click={updateList}
      class="servant-buttons"
    />
    <button
      style="background-image: url(
            https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_9.png)"
      data-class="ruler"
      on:click={updateList}
      class="servant-buttons"
    />
    <button
      style="background-image: url(
            https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_11.png)"
      data-class="avenger"
      on:click={updateList}
      class="servant-buttons"
    />
    <button
      style="background-image: url(
            https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_23.png)"
      data-class="mooncancer"
      on:click={updateList}
      class="servant-buttons"
    />
    <button
      style="background-image: url(
            https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_10.png)"
      data-class="alterego"
      on:click={updateList}
      class="servant-buttons"
    />
    <button
      style="background-image: url(
            https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_25.png)"
      data-class="foreigner"
      on:click={updateList}
      class="servant-buttons"
    />
    <button
      style="background-image: url(
            https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_28.png)"
      data-class="pretender"
      on:click={updateList}
      class="servant-buttons"
    />
    <button
      style="background-image: url(
            https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_8.png)"
      data-class="shielder"
      on:click={updateList}
      class="servant-buttons"
    />
    <!--

    <button
      style="background-image: url(
            https://assets.atlasacademy.io/GameData/JP/ClassIcons/class3_97.png)"
      data-class="other"
      on:click={updateList}
      class="servant-buttons"
    />

    -->
  </div>
</div>

<!-- Rarezas -->
<div class="container">
  <div class="d-flex buttons-rarity">
    <button on:click={rarityFilter} data-rarity="0">
      <span class="rarity-glow">0★</span>
    </button>
    <button on:click={rarityFilter} data-rarity="1">
      <span class="rarity-glow">1★</span>
    </button>
    <button on:click={rarityFilter} data-rarity="2">
      <span class="rarity-glow">2★</span>
    </button>
    <button on:click={rarityFilter} data-rarity="3">
      <span class="rarity-glow">3★</span>
    </button>
    <button on:click={rarityFilter} data-rarity="4">
      <span class="rarity-glow">4★</span>
    </button>
    <button on:click={rarityFilter} data-rarity="5">
      <span class="rarity-glow">5★</span>
    </button>
  </div>
</div>

<!-- Ordenar por -->
<div class="container">
  <div class="d-flex container-sort">
    <!-- Up -->
    <button on:click={updateSortListUp} class="sort-btn">
      <i class="bi bi-sort-numeric-up" />
    </button>
    <!-- Down -->
    <button on:click={updateSortListDown} class="sort-btn">
      <i class="bi bi-sort-numeric-down" />
    </button>
  </div>
</div>

<div
  style="position: absolute; visibility:hidden;"
  class="servant-button-selected"
/>

<div
  style="position: absolute; visibility:hidden;"
  class="rarity-button-selected"
/>

<style>
  button.sort-btn {
    background: #23272a;
    border: 0;
    font-size: larger;
    color: white;
    padding: 10px;
  }
  .rarity-button-selected {
    filter: drop-shadow(0px 0px 2px yellow);
  }

  .buttons-rarity {
    gap: 20px;
  }

  .rarity-glow {
    filter: drop-shadow(0px 0px 3px gold);
    pointer-events: none;
  }

  .d-flex.container-sort {
    justify-content: flex-end;
    gap: 5px;
    padding-right: 40px;
    padding-left: 40px;
  }

  .buttons-rarity,
  .container-buttons {
    display: inline-flex !important;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }
  .buttons-rarity,
  .container-buttons > button {
    margin: 6px;
  }

  .buttons-rarity button {
    background-color: #23272a;
    border: 0;
    color: white;
    border-radius: 3px;
    padding: 10px;
  }

  .servant-buttons {
    background: transparent;
    border: 0;
    filter: grayscale();
    transition: all ease 0.5s;
    padding: 20px;
    background-size: cover;
    margin-bottom: -20px;
  }

  .servant-button-selected {
    filter: none;
  }

  .filter-nav {
    padding-left: 85px;
    padding-right: 85px;
    padding-top: 20px;
  }
</style>
