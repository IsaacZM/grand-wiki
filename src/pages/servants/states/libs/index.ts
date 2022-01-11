export const randomText = (): string => {
    const textos = [
        'Hey esta la pagina cargando...',
        'Uhhh parace que esto esta un poco lento',
        'Esperate un poco que fou y merlin esta peleando de nuevo..',
        'Cargando... (Si la tipica frase de Cargando)',
        'Sabes que si le quitas a cargando la r es cagando.'
    ]

    return textos[Math.floor(Math.random() * textos.length)];
}

export const randomImage = (): string => {
    const imgs: string[] = [
        'https://64.media.tumblr.com/5bed4fa7daea0b1630e4d87cbcb9682d/tumblr_pm18rcQjdb1sf8dbr_540.png',
        'https://64.media.tumblr.com/aa597a0bd0ab8bfdfd574796a9d45a29/tumblr_po7v3wz54k1sf8dbr_540.png',
        'https://64.media.tumblr.com/0edb53e2b848311f74bd8763e6900b7d/tumblr_po7v3xwetn1sf8dbr_540.png',
        'https://64.media.tumblr.com/05f5123b6746488a598e23924eefe8b0/tumblr_po7v3xRyDw1sf8dbr_540.png',
        'https://64.media.tumblr.com/05f5123b6746488a598e23924eefe8b0/tumblr_po7v3xRyDw1sf8dbr_540.png',
        'https://64.media.tumblr.com/1ada1bd9a25becc226dc3a651ae5bf86/tumblr_po7v3xWnQL1sf8dbr_540.png',
    ]

    return imgs[Math.floor(Math.random() * imgs.length)]
}