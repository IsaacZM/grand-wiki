export const getBackgroundCache = (id) => {
  const get = localStorage.getItem(id) || null;
  console.log(get);
  return get;
};

export const setBackgroundCache = (url, id) => {
  localStorage.setItem(id, url);
};
