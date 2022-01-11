<script type="ts">
  // Interfaces
  import type { Servant } from "../../../../interface/servant";
  export let servant: Servant;
</script>

<h1>Stats</h1>

<div class="shadow-sm table-responsive r-table">
  <table class="table table-dark table-striped servant-table">
    <tbody>
      <tr>
        <td style="width: 25%;"><b>Nombre</b></td>
        <td>{servant.info.nameEn}</td>
        <td style="width: 25%;"><b>ID</b></td>
        <td>{servant.svtId}</td>
      </tr>
      <tr>
        <td style="width: 25%;"><b>Clase</b></td>
        <td>{servant.info.className}</td>
        <td style="width: 25%;"><b>Atributo</b></td>
        <td>{servant.info.attribute}</td>
      </tr>
      <tr>
        <td style="width: 25%;"><b>Rareza</b></td>
        <td>
          {#if servant.info.rarity2 === servant.info.rarity}
            <img
              alt="stars"
              height="24px"
              width="68px"
              src="https://rayshift.io/static/images/other/{String(
                servant.info.rarity
              )}.png"
            />
          {:else}
            <img
              alt="stars"
              src="https://rayshift.io/static/images/other/{String(
                servant.info.rarity
              )}.png"
            />
            |<img
              alt="stars"
              src="https://rayshift.io/static/images/other/{String(
                servant.info.rarity2
              )}.png"
            />
          {/if}
        </td>
        <td style="width: 25%;"><b>Illustrator</b></td>
        <td>{servant.info.illustratorEn}</td>
      </tr>
      <tr>
        <td style="width: 25%;"><b>Peso</b></td>
        <td>{servant.info.weight}</td>
        <td style="width: 25%;"><b>Altura</b></td>
        <td>{servant.info.height}</td>
      </tr>
      <tr>
        <td style="width: 25%;"><b>ATK</b></td>
        <td>{servant.info.atkMin} — {servant.info.atkMax}</td>
        <td style="width: 25%;"><b>HP</b></td>
        <td>{servant.info.hpMin} — {servant.info.hpMax}</td>
      </tr>
      <tr>
        <td style="width: 25%;"><b>ATK Lv.90</b></td>
        <td>{servant.info.atk90}</td>
        <td style="width: 25%;"><b>HP Lv.90</b></td>
        <td>{servant.info.hp90}</td>
      </tr>
      <tr>
        <td style="width: 25%;"><b>ATK Lv.100</b></td>
        <td>{servant.info.atk100 === -1 ? "???" : servant.info.atk100}</td>
        <td style="width: 25%;"><b>HP Lv.100</b></td>
        <td>{servant.info.hp100 === -1 ? "???" : servant.info.hp100}</td>
      </tr>
      <tr>
        <td style="width: 25%;"><b>Generacion de estrellas</b></td>
        <td>{servant.info.starRate}</td>
        <td style="width: 25%;"><b>Absorcion de estrellas</b></td>
        <td>{servant.info.criticalRate}</td>
      </tr>
      <tr>
        <td style="width: 25%;"><b>Generacion de NP</b></td>
        <td
          >Atk: {servant.info.npRate.Quick || ""} | Def: {servant.info.npRate
            .Defense || ""}</td
        >
        <td style="width: 25%;"><b>Probabilidad de muerte</b></td>
        <td>{servant.info.deathRate}</td>
      </tr>
      <tr>
        <td style="width: 25%;"><b>Cartas</b></td>
        <td>
          {#each servant.info.cards as card}
            {#if card === "Quick"}
              <span style="color: green;">Q </span>
            {:else if card === "Arts"}
              <span style="color: cyan;">A </span>
            {:else}
              <span style="color:crimson">B </span>
            {/if}
          {/each}
        </td>
        <td style="width: 25%;"><b>Weak</b></td>
        <td>
          {#if servant.info.isWeakToEA}
            EA (Gilgamesh NP) ,
          {/if}
          {#if servant.info.isHumanoid}
            Humanoid
          {/if}
        </td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  h1 {
    color: white;
  }

  .servant-table {
    filter: drop-shadow(0px 0px 5px black);
  }

  .r-table {
    border-radius: 10px;
    filter: drop-shadow(1px 1px 1px);
  }
</style>
