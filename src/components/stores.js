import { writable } from "svelte/store";

export const seo = writable({
    title: "Proyecto Grand Wiki | Proyecto Grand Order", // default title
    description: "Wikia en español del juego de movil Fate / Grand Order." // default description
});