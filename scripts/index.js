const fs = require("fs");
const fetch = require("node-fetch");
const path = require("path");
const { Octokit } = require("@octokit/core");
const octokit = new Octokit();
const unzipper = require("unzipper");

const { pipeline } = require("stream");
const { promisify } = require("util");
const streamPipeline = promisify(pipeline);

let endpoint =
  "https://script.google.com/macros/s/AKfycbzbCo8Nj1lRBAc1Jo2QlGON6WXwS6ZB1R2-l0jmlndp1S7PLiax7Pd_MayMz-WzXEHD/exec?servant=";

const rebuildRepository = async () => {
  const requestData = await fetch(
    "https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json"
  );
  const res = await requestData.json();

  fs.readFile(__dirname + "/dataset.json", (err, data) => {
    if (err) throw Error(err.message);

    const servants = JSON.parse(data);

    const servantsForbiddensData = fs.readFileSync(__dirname + "/skip.json")
    const forbidden = JSON.parse(servantsForbiddensData);

    for (const [id, servant] of Object.entries(servants["servants"])) {
      
      if(forbidden.servants.includes(id)) {
        console.log("✂ Servant " + id + " skipped!");
        continue;
      }

      const svt = res.filter((data) => data.id === Number(servant.svtId))[0];
      const figures = [] ;
      const ascensions = [];

      // Figure
      if (svt.extraAssets.charaFigure.ascension === undefined) {
        if(svt.extraAssets.charaFigure.story) {
          figures.push(...Object.values(svt.extraAssets.charaFigure.story));
        }
      } else {
        figures.push(...Object.values(svt.extraAssets.charaFigure.ascension));

        if (
          svt.extraAssets.charaFigure.costume !== undefined &&
          Object.keys(svt.extraAssets.charaFigure.costume).length > 0
        ) {
          figures.push(...Object.values(svt.extraAssets.charaFigure.costume));
        }
      }

      servant.figure = figures;

      // Ascension
      if (svt.extraAssets.charaGraph.ascension === undefined) {
        ascensions.push(...Object.values(svt.extraAssets.charaGraph.story));
      } else {
        ascensions.push(...Object.values(svt.extraAssets.charaGraph.ascension));

        if (
          svt.extraAssets.charaGraph.costume !== undefined &&
          Object.keys(svt.extraAssets.charaGraph.costume).length > 0
        ) {
          ascensions.push(...Object.values(svt.extraAssets.charaGraph.costume));
        }
      }

      servant.ascension = ascensions;

      // Skills Icons
      var { activeSkills, activeSkillsEn } = servant;

      for (const [index, active] of activeSkills.entries()) {
        const { skills } = active;

        for (const [i, skill] of skills.entries()) {
          activeSkillsEn[index].skills.find((sk) => {
            sk.icon = skill.icon;
          });
        }
      }
      const string = JSON.stringify(servant, null, 4);

      // Fix skill

      if (servant.no === 303) {
        servant.activeSkillsEn[1].skills.pop();
        let skill = servant.activeSkillsEn[1].skills;
        servant.activeSkillsEn[1].skills = skill;
      }

      fs.writeFile(
        path.join(__dirname, "../public/assets/servants/" + id + ".json"),
        string,
        (err) => {
          if (err) throw Error(err.message);
          console.log("UNZIP: Servant " + id + " exported successfull!");
        }
      );
    }
  });
};

const rebuildIndex = async () => {
  const requestData = await fetch(
    "https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json"
  );
  const res = await requestData.json();

  const apiRequest = await fetch(endpoint);
  const resEnpoint = await apiRequest.json();

  fs.readFile(__dirname + "/dataset.json", (err, data) => {
    if (err) throw Error(err.message);

    const servants = JSON.parse(data);

    const index = [];

    for (const [id, servant] of Object.entries(servants["servants"])) {

      const svt = res.filter((data) => data.id === Number(servant.svtId))[0];

      const icon =
        Object.keys(svt.extraAssets.status).length > 0
          ? svt.extraAssets.status.ascension["1"]
          : "https://i.imgur.com/ULg967w.png";

      // Endpoint google sheet with akkas!
      const apiSvt =
        resEnpoint.filter((svt) => svt.collectionNo === servant.no)[0] || false;

      if (apiSvt) {
        index.push({
          name: apiSvt.Nombre,
          id: servant.no,
          icon: icon,
          className: servant.info.className,
          akas: apiSvt.AKA,
          group: apiSvt.group,
          rarity: servant.info.rarity,
        });
      } else {
        index.push({
          name: servant.info.nameEn,
          id: servant.no,
          icon: icon,
          className: servant.info.className,
          akas: [],
          group: [],
          rarity: servant.info.rarity,
        });
      }
    }

    const indexParse = JSON.stringify(index, null, 4);
    fs.writeFile(
      path.join(__dirname, "../public/assets/index.json"),
      indexParse,
      (e) => {
        if (e) throw Error(e.message);
        console.log("ASSETS: Indice creado correctamente!");
      }
    );
  });
};

const updateDataSet = async () => {
  console.log(
    "✨ Obteniendo nuevo dataset del repositorio de chaldea center"
  );
  const request = await octokit.request(
    "GET /repos/{owner}/{repo}/releases",
    {
      owner: "chaldea-center",
      repo: "chaldea-dataset",
    }
  );

  const download = await fetch(request.data[0].assets[0].browser_download_url);

  await streamPipeline(
    download.body,
    fs.createWriteStream("./scripts/download/dataset.zip")
  );
  fs
    .createReadStream("./scripts/download/dataset.zip")
    .pipe(unzipper.Extract({ path: "./scripts/" }));
  console.log(
    "✔ Dataset actualizado a la build " +
      request.data[0].tag_name +
      " con exito!"
  );
};

const updateSpecifyDataSet = async (tag) => {
  console.log(
    "SERVIDOR: Obteniendo nuevo dataset del repositorio de chaldea center"
  );
  const request = await octokit
    .request("GET /repos/{owner}/{repo}/releases/tags/{tag}", {
      owner: "chaldea-center",
      repo: "chaldea-dataset",
      tag: tag,
    })
    .catch((error) => {
      console.log(
        "GITHUB: Ha retornado un error cuando busco la build [" +
          tag +
          "] el error fue " +
          error.message
      );
      console.log(
        "Por favor ve a https://github.com/chaldea-center/chaldea-dataset/releases ha buscar una build que contenga dataset-text.zip o cualquier .zip"
      );
      process.exit(1);
    });

  if (request.data.assets[0] === undefined) {
    console.log(
      "ERROR: Lo siento pero la build [" +
        tag +
        "] no contiene datos para actualizar por favor actualize alguna build mas nueva o antigua"
    );
    process.exit(1);
  }

  const download = await fetch(request.data.assets[0].browser_download_url);

  await streamPipeline(
    download.body,
    fs.createWriteStream("./scripts/download/dataset.zip")
  );
  await fs
    .createReadStream("./scripts/download/dataset.zip")
    .pipe(unzipper.Extract({ path: "./scripts/" }));
  console.log(
    "SERVIDOR: Dataset actualizado a la build " +
      request.data.tag_name +
      " con exito!"
  );
};

module.exports = {
  rebuildRepository,
  rebuildIndex,
  updateDataSet,
  updateSpecifyDataSet,
};
