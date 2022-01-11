<script type="ts">
  import type { Servant } from "../../../../interface/servant";
  import { translate } from "./lib/translate";
  export let servant: Servant;

  const { noblePhantasmEn } = servant;

  const skillTextTranslateModule = async (
    str: string,
    name: string,
    n: number
  ): Promise<string> => {
    const tl = await translate(str, name, n, servant.svtId);
    return tl;
  };
</script>

{#each noblePhantasmEn as NP, index}
  <div class="accordion-item">
    <h2 class="accordion-header" id="skill-{index}">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#NP-{index}"
        aria-expanded="false"
        aria-controls="NP {index}"
      >
        {NP.name}
      </button>
    </h2>

    <div
      id="NP-{index}"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#NP-{index}"
    >
      <div class="accordion-body">
        <div class="table-responsive table-skill">
          <table class="table table-dark ">
            <tbody>
              {#each NP.effects as f}
                <tr>
                  {#if f.lvData.length > 0}
                    <td>
                      {@html f.description
                        .replace(/\n/g, "<br />")
                        .replace("{{", "")
                        .replace("}}", "")}
                    </td>
                    <td>
                      {f.lvData.join(" / ")}
                    </td>
                  {:else}
                    <td colspan="2" style="width: 100%;">
                      {#await skillTextTranslateModule(f.description, NP.name || NP.nameJp, index)}
                        {@html f.description
                          .replace(/\n/g, "<br />")
                          .replace("{{", "")
                          .replace("}}", "")}
                      {:then value}
                        {@html value}
                      {:catch error}
                        {@html f.description
                          .replace(/\n/g, "<br />")
                          .replace("{{", "")
                          .replace("}}", "")}
                      {/await}
                    </td>
                  {/if}
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
{/each}

<style>
  .table-skill {
    filter: drop-shadow(1px 1px 1px black);
    border-radius: 5px;
  }

  .accordion-item,
  .accordion-button {
    color: white;
    background-color: #23272a;
    border: 0;
    box-shadow: none !important;
  }

  .accordion-button::after {
    filter: brightness(10);
  }
</style>
