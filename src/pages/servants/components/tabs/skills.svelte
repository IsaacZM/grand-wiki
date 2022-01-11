<script type="ts">
  import type { Servant } from "../../../../interface/servant";
  import { translate } from "./lib/translate";
  import TranslateButton from "../../../home/components/translate.svelte";
  export let servant: Servant;
  const { activeSkillsEn } = servant;

  const skillTextTranslateModule = async (
    str: string,
    name: string,
    n: number
  ): Promise<string> => {
    const tl = await translate(str, name, n, servant.svtId);
    return tl;
  };
</script>

{#each activeSkillsEn as activeSkills, index}
  <div class="accordion-item">
    <h2 class="accordion-header" id="skill-{index}">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#skillT-{index}"
        aria-expanded="false"
        aria-controls="Skill {index}"
      >
        Habilidad {index + 1}
      </button>
    </h2>

    <div
      id="skillT-{index}"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#skillT-{index}"
    >
      <div class="accordion-body">
        {#each activeSkills.skills as skill, index}
          {#if skill.name.length > 0}
            <div class="table-responsive table-skill">
              <table class="table table-dark ">
                <thead>
                  <tr>
                    <th colspan="2">
                      <img
                        alt="skill-icon"
                        class="skill-icon"
                        loading="lazy"
                        src="/assets/icons/{skill.icon}"
                      />
                      {skill.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {#each skill.effects as f}
                    <tr>
                      {#if f.lvData.length > 0}
                        <td>
                          {@html f.description.replace(/\n/g, "<br />")}
                        </td>
                        <td>
                          {f.lvData.join(" / ")}
                        </td>
                      {:else}
                        <td colspan="2" style="width: 100%;">
                          {#await skillTextTranslateModule(f.description, skill.nameEn || skill.nameJp || skill.name, index)}
                            {@html f.description.replace(/\n/g, "<br />")}
                          {:then value}
                            {@html value}
                          {:catch error}
                            {@html f.description.replace(/\n/g, "<br />")}
                          {/await}
                        </td>
                      {/if}
                    </tr>
                  {/each}
                </tbody>
              </table>
              <table class="table table-dark">
                <thead>
                  <tr>
                    <td colspan="2"
                      >Se baja el tiempo de reutilizacion de la habilidad en el
                      nivel 6 y 10</td
                    >
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="width: 5%;"> Cooldown </td>
                    <td>
                      {skill.cd - 1} / {skill.cd - 2}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <TranslateButton
              name={skill.nameEn || skill.name || skill.nameJp}
              id={String(servant.svtId)}
              type="Habilidad"
              number={String(index)}
            />
          {/if}
        {/each}
      </div>
    </div>
  </div>
{/each}

<style>
  .table-skill {
    filter: drop-shadow(1px 1px 1px black);
    border-radius: 5px;
  }

  .skill-icon {
    padding-right: 10px;
    filter: drop-shadow(1px 1px 1px black);
    height: 45px;
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
