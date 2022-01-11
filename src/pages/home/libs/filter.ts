export const selected = (classesSelects, e, callback) => {
  let { target } = e;

  let clases = classesSelects;

  if (target.dataset.rarity === "other") {
    target.dataset.rarity = "grandCaster";
  }

  if (target.classList.contains("servant-button-selected")) {
    target.classList.remove("servant-button-selected");
  } else {
    target.classList.add("servant-button-selected");
  }

  const hasClass = clases.includes(target.dataset.class);

  if (hasClass) {
    clases = clases.filter((data) => data !== target.dataset.class);
  } else {
    clases.push(target.dataset.class);
  }

  callback(clases);
};

export const selectedRarity = (raritySelects, e, callback) => {
  const { target } = e;

  let rarities = raritySelects;

  if (target.classList.contains("rarity-button-selected")) {
    target.classList.remove("rarity-button-selected");
  } else {
    target.classList.add("rarity-button-selected");
  }

  const hasClass = rarities.includes(target.dataset.rarity);

  if (hasClass)
    rarities = rarities.filter((data) => data !== target.dataset.rarity);
  else rarities.push(target.dataset.rarity);

  callback(rarities);
};
