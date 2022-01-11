<script type="ts">
  import { Link } from "svelte-routing";

  export let servantId = 0;

  const LoadServantImage = async () => {
    const response = await fetch(`https://api.atlasacademy.io/nice/JP/servant/${servantId}`);
    const { extraAssets } = await response.json();
    const { charaFigure } = extraAssets;
    const url = charaFigure.ascension['3'].replace('_merged', '');

    return url
  };

  $: if(servantId !== 0) {
    LoadServantImage().then(url => {
      imageServant = url
    });
  }

  $: imageServant = ""

</script>

<div class="hero text-center">
  <div class="overflow-hidden" style="">
    <div class="container" style="padding-left: 0; padding-right: 0;">
      <Link to="/servant/{servantId}">
        <img
          alt="logo"
          height="764px"
          width="1024px"
          src="{imageServant || "https://i.imgur.com/xfU11sF.png"}"
          class="img-fluid"
          style="object-position: 0px 55px; transform: scale(1.3);"
          loading="lazy"
        />
      </Link>
    </div>
    <div class="container-fluid line-black" />
  </div>
</div>

<style>
  .hero {
    height: 400px;
    color: white;
    background-size: cover;
    background-position: center;
    background-image: url(https://static.atlasacademy.io/JP/Back/back137200_1344_626.png);
  }

  .hero img {
    height: 400px;
    width: auto;
    object-fit: cover;
    filter: drop-shadow(1px 1px 1px black);
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
