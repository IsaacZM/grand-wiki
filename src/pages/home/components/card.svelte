<script type="ts">
  export let name: string;
  export let icon: string;
  export let id: number;

  import { link, Link } from "svelte-routing";

  // Animation
  import { fade } from "svelte/transition";

  let refresh = true;
</script>

<Link to={"/servant/" + id}>
  <div in:fade={{ duration: 1000 }} out:fade={{ duration: 250 }} class="col">
    <div class="card shadow-sm card-servant" style="width: 15rem;">
      <img
        src={icon}
        height="238px"
        width="238px"
        loading="lazy"
        class="card-img-top img-fluid"
        alt={name}
      />
      <div class="card-body">
        <p class="card-text">
          {name}
        </p>
      </div>
    </div>
  </div>
</Link>

<style>
  .card-servant {
    background-color: #23272a;
    color: white;
    transition: all 0.2s ease-in-out;
  }

  .card-servant:hover {
    cursor: pointer;
    transform: scale(1.05);
    filter: drop-shadow(0px 0px 12px rgba(255, 252, 101, 0.94));
    -webkit-filter: drop-shadow(0px 0px 12px rgba(255, 252, 101, 0.94));
    -moz-filter: drop-shadow(0px 0px 12px rgba(255, 252, 101, 0.94));
  }
</style>
