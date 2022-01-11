<script type="ts">
  import { Link } from "svelte-routing";
  import { fade } from "svelte/transition";
</script>

<div class="hero text-center">
  <div class="overflow-hidden" style="">
    <div class="container" style="padding-left: 0; padding-right: 0;">
      <Link to="/servant/324">
        <img
          alt="logo"
          height="764px"
          width="1024px"
          src="https://i.imgur.com/uGtIFEE.png"
          class="img-fluid"
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
