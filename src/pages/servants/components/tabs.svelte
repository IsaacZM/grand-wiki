<script type="ts">
  export let servant;

  export let ascensiones;

  // Tabs
  import Stats from "./tabs/stats.svelte";
  import Skills from "./tabs/skills.svelte";
  import NoblePhantams from "./tabs/np.svelte";
  import Lore from "./tabs/lore.svelte";
  import { onMount } from "svelte";

  export let tab: string;

  const startTab = (tab: string) => {
    switch (tab) {
      case "skills":
        document.getElementById("skills").classList.add("show");
        document.getElementById("skills").classList.add("active");
        break;
      case "stats":
        document.getElementById("stats").classList.add("show");
        document.getElementById("stats").classList.add("active");
        break;
      case "np":
        document.getElementById("np").classList.add("show");
        document.getElementById("np").classList.add("active");
        break;
      case "lore":
        document.getElementById("lore").classList.add("show");
        document.getElementById("lore").classList.add("active");
        break;
      case "ascension":
        ascensiones = true;
        document.getElementById("stats").classList.add("show");
        document.getElementById("stats").classList.add("active");
        break;
      default:
        document.getElementById("stats").classList.add("show");
        document.getElementById("stats").classList.add("active");
    }
  };

  onMount(() => startTab(tab));
</script>

<ul class="nav nav-tabs menu" style="border: 0;" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button
      class="nav-link active"
      id="stats-tab"
      data-bs-toggle="tab"
      data-bs-target="#stats"
      type="button"
      role="tab"
      aria-controls="stats"
      aria-selected="true"
      on:click={() => {
        window.history.replaceState(
          {},
          "",
          "/servant/" + servant.no + "/stats"
        );
      }}>Stats</button
    >
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
      id="skills-tab"
      data-bs-toggle="tab"
      data-bs-target="#skills"
      type="button"
      role="tab"
      aria-controls="skills"
      aria-selected="false"
      on:click={() => {
        window.history.replaceState(
          {},
          "",
          "/servant/" + servant.no + "/skills"
        );
      }}>Skills</button
    >
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
      id="lore-tab"
      data-bs-toggle="tab"
      data-bs-target="#lore"
      type="button"
      role="tab"
      aria-controls="lore"
      aria-selected="false"
      on:click={() => {
        window.history.replaceState({}, "", "/servant/" + servant.no + "/lore");
      }}>Lore</button
    >
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
      id="noblePhantasm-tab"
      data-bs-toggle="tab"
      data-bs-target="#np"
      type="button"
      role="tab"
      aria-controls="Noble Phantasm"
      aria-selected="false"
      on:click={() => {
        window.history.replaceState({}, "", "/servant/" + servant.no + "/np");
      }}>Noble Phantasm</button
    >
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
      id="Ascensiones-tab"
      data-bs-toggle="tab"
      type="button"
      role="tab"
      aria-controls="Ascensiones"
      aria-selected="false"
      on:click={() => {
        window.history.replaceState(
          {},
          "",
          "/servant/" + servant.no + "/ascension"
        );

        ascensiones = true;
      }}>Ascensiones</button
    >
  </li>
</ul>

<div class="container tab-container">
  <div class="tab-content">
    <div
      class="tab-pane fade"
      id="stats"
      role="tabpanel"
      aria-labelledby="stats-tab"
    >
      <Stats {servant} />
    </div>
    <div
      class="tab-pane fade"
      id="skills"
      role="tabpanel"
      aria-labelledby="skills-tab"
    >
      <Skills {servant} />
    </div>
    <div
      class="tab-pane fade"
      id="lore"
      role="tabpanel"
      aria-labelledby="lore-tab"
    >
      <Lore {servant} />
    </div>
    <div
      class="tab-pane fade"
      id="np"
      role="tabpanel"
      aria-labelledby="noblePhantams-tab"
    >
      <NoblePhantams {servant} />
    </div>
  </div>
</div>

<style>
  .menu {
    background: #23272a;
    justify-content: center;
    padding: 10px;
  }

  .tab-container {
    padding-top: 20px;
    padding-left: 75px;
    padding-right: 75px;
  }

  .nav-link {
    background-color: transparent !important;
    border: 0;
    color: white !important;
  }

  .nav-link:hover {
    background-color: #2c2f33 !important;
    border-radius: 5px !important;
  }

  .tab-content {
    padding-bottom: 20px;
  }
</style>
