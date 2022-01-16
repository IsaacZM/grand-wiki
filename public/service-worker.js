
    let cacheName = "service-build-46351d205299";

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
    