<script lang="ts">
  // Libs
  import { Route, Router } from "svelte-routing";
  import { onMount } from "svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast";

  // Interfaces
  import type { index } from "./interface";

  // Component/s
  import TransitionModule from "./components/TransitionModule.svelte";

  // Pages
  import Servant from "./pages/servants/servant.svelte";
  import Home from "./pages/home/home.svelte";
  import Found from "./pages/404/404.svelte";

  // Variables
  let servants: index[] = [];
  let filteredServants: index[] = [];

  // Functions
  const loadHandler = async () => {
    const peticion = await fetch("/assets/index.json");
    const respuesta: any[] = await peticion.json();

    servants = respuesta.sort((a, b) => {
      return b.id - a.id;
    });
    filteredServants = respuesta.sort((a, b) => {
      return b.id - a.id;
    });
  };

  const getIcon = (id): string => {
    const servant = servants.filter((svt) => svt.id === id);

    if (servant.length > 0) {
      return servant[0].icon;
    } else {
      return "https://i.imgur.com/R7ZZr8a.png";
    }
  };

  // Events
  onMount(loadHandler);
</script>

<main>
  <Router>
    <SvelteToast />

    <Route path="/servant/:id" let:params>
      <Servant id={params.id} />
    </Route>

    <Route path="/servant/:id/:tab" let:params>
      <Servant id={params.id} tab={params.tab} />
    </Route>

    <Route path="/">
      <TransitionModule>
        <Home {servants} {filteredServants} />
      </TransitionModule>
    </Route>

    <Route path="/error/:message" let:params>
      <Found message={params.message} />
    </Route>

    <Route>
      <Found message={"Not found"} />
    </Route>
  </Router>
</main>

<style>
</style>
