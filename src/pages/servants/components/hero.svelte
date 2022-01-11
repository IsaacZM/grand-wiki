<script type="ts">
  // Lib/s
  import icons from "../../home/libs/clases";
  import Slider from "./slider.svelte";
  import { getBackgroundCache } from "../../../scripts/background";
  import { fade } from "svelte/transition";

  // Variable/s
  export let changeBackground;
  export let figure: string[];
  export let rarity: number;
  export let className: string;
  export let id: number;

  const getBackground = () => {
    switch (id) {
      case 309:
        return "https://assets.atlasacademy.io/GameData/JP/Back/back118700_1344_626.png";
      case 151:
        return "https://assets.atlasacademy.io/GameData/JP/Back/back36202.png";
      case 284:
        return "https://assets.atlasacademy.io/GameData/JP/Back/back117900_1344_626.png";
      case 205:
        return "https://assets.atlasacademy.io/GameData/JP/Back/back55600.png";
      case 215:
        return "https://assets.atlasacademy.io/GameData/JP/Back/back61000.png";
      case 229:
        return "https://assets.atlasacademy.io/GameData/JP/Back/back65801.png";
      case 247:
        return "https://assets.atlasacademy.io/GameData/JP/Back/back75800.png";
    }

    if (
      getBackgroundCache(String(id)) === "null" ||
      getBackgroundCache(String(id)) === null
    ) {
      return "https://assets.atlasacademy.io/GameData/JP/Back/back122000_1344_626.png";
    } else {
      return getBackgroundCache(String(id));
    }
  };

  let bg = getBackground();

  window.addEventListener("bgChange", () => {
    console.log("Cambio!");
    bg = getBackground();
  });

  // Functions

  const getClassIcon = (str) => {
    return icons.get(str);
  };
</script>

<div class="hero text-center" style="background-image: url({bg});">
  <div class="stars">
    <img
      alt="stars"
      height="24px"
      width="68px"
      src="https://rayshift.io/static/images/other/{String(rarity)}.png"
    />
  </div>
  <div class="ClassIcon">
    <img height="80px" width="80px" alt="class" src={getClassIcon(className)} />
  </div>
  <div class="changer">
    <button on:click={() => (changeBackground = true)}>
      <i class="bi bi-back" />
    </button>
  </div>
  <div class="overflow-hidden" style="">
    <!-- Slider -->
    <div transition:fade={{ duration: 250, delay: 600 }}>
      <Slider figures={figure} />
    </div>
    <div class="container-fluid line-black" />
  </div>
</div>
<div class="servant-fade" />

<style>
  .changer {
    position: absolute;
    left: 5px;
    font-size: 25px;
    z-index: 3;
  }

  .changer button {
    background: transparent;
    border: 0;
    color: white;
  }

  .ClassIcon {
    position: absolute;
    top: 355px;
    right: 5px;
    filter: drop-shadow(1px 1px 1px black);
    z-index: 2;
  }

  .ClassIcon img {
    width: auto;
    height: 40px;
  }

  .stars {
    filter: drop-shadow(1px 1px 1px black);
    position: absolute;
    top: 365px;
    left: 5px;
    z-index: 2;
  }

  .hero {
    height: 400px;
    color: white;
    background-size: cover;
    background-position: center;
    box-shadow: inset 0px 0px 100px black;
  }

  .servant-fade {
    opacity: 0 !important;
  }

  .line-black {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.5) 75%,
      #000000d4 100%
    );
    height: 50px;
    margin-top: -50px;
  }
</style>
