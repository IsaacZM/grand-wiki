const { updateSpecifyDataSet } = require("./index");

const argsParseBuild = (string) => {
  const regex = /--[A-Z]*/gi;

  const argsKeys = string.match(regex);

  const args = string
    .split(regex)
    .slice(1)
    .map((arg) => arg.trim());

  if (args.length > 0) {
    return args[argsKeys.indexOf("--" + "build")];
  }

  const e = Error(
    "Lo siento pero en el comando tiene que usar el argumento --build {tagVersion}"
  );
  console.log(e.message);
  process.exit(1);
};

(() => {
  const build = argsParseBuild(process.argv.join(" "));
  console.log("ASSETS: Actualizando dataset!");
  updateSpecifyDataSet(build);
})();
