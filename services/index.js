const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const chalk = require("chalk");

/**
 * Este script regenera el worker para actualizar los estilos para cuando se lleve a producion
 * se actualize todos los estilos de los usuarios finales!
 */
const regenServiceWorker = () => {
  const build = crypto.randomBytes(6).toString("hex");

  console.log(
    chalk.green(
      "⚙ generating build " + chalk.bold(build) + " for service worker."
    )
  );

  // Script del worker que se escribe
  const worker = `
    let cacheName = "service-build-${build}";

    self.addEventListener("install", (event) => {
    self.skipWaiting();
    console.log("[Service Worker | Grand Wiki] Installed");
    });

    self.addEventListener("activate", async (event) => {
    const existingCaches = await caches.keys();
    const invalidCaches = existingCaches.filter((c) => c !== cacheName);
    await Promise.all(invalidCaches.map((ic) => caches.delete(ic)));
    console.log("[Service Woker | Grand Wiki] Activated");
    });

    const cachedFetch = (request) =>
    request.method != "GET"
        ? // we can only cache GET requests
        fetch(request).catch((err) => err)
        : caches.open(cacheName).then((cache) =>
            cache.match(request).then((resp) => {
            if (!!resp) {
                console.log('[Service Worker | Grand Wiki] Cache:', request.url);
                return resp;
            } else {
                console.log("[Service Worker | Grand Wiki] Fetch:", request.url);
                return fetch(request)
                .then((response) => {
                    // put the new response in the cache for next fetches
                    cache.put(request, response.clone());

                    return response;
                })
                .catch((err) => err);
            }
            })
        );

    self.addEventListener("fetch", (event) =>
    event.respondWith(cachedFetch(event.request))
    );
    `;

  fs.writeFile(
    path.join(__dirname, "../public/service-worker.js"),
    worker,
    (err) => {
      if (err) throw Error("Ha ocurrido un error: " + err.message);
      console.log(chalk.green("service worker genereated successfull!"));
    }
  );
};

regenServiceWorker();
