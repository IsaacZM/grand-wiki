<script lang="ts">
  import type { index } from "../../../interface";

  export let servants: index[];
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  onMount(() => {
    const { autocomplete } = window["@algolia/autocomplete-js"];

    autocomplete({
      container: "#autocomplete",
      placeholder: "Altria Pendragon (Saber)",
      getSources() {
        return [
          {
            sourceId: "servants",
            getItems({ query }) {
              return servants.filter(({ name }) =>
                name.toLowerCase().includes(query.toLowerCase())
              );
            },
            onSelect({ item }) {
              navigate("/servant/" + item.id);
            },
            templates: {
              item({ item, createElement }) {
                const itemHtml = `
                <div class="itemSearch">
                    <div>
                        <img
                        src="${item.icon}"
                        alt="${item.name}"
                        />
                    </div>
                    <div>
                        ${item.name}
                    </div>
                </div>
                `;

                return createElement("div", {
                  dangerouslySetInnerHTML: {
                    __html: itemHtml,
                  },
                });
              },
            },
          },
        ];
      },
    });
  });
</script>

<div class="container" id="searchbox">
  <div id="autocomplete" />
</div>

<style>
  #searchbox {
    padding: 5rem;
  }

  :global(.itemSearch) {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    align-items: center;
    gap: 20px;
  }

  :global(.itemSearch img) {
    height: 150px;
    width: auto;
  }
</style>
