<script lang="ts">
    import { seo } from "./stores.js";
    
    let description: string;
    let title: string;

    seo.subscribe(value => {
        title = value.title;
        description = value.description;
    });

    $: seoTitle = title;
    $: seoDescription = description;
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{seoTitle}</title>
    <meta name="title" content="{seoTitle}">
    <meta name="description" content="{seoDescription}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://wiki.proyectograndorder.es">
    <meta property="og:title" content="{seoTitle}">
    <meta property="og:description" content="{seoDescription}">
    <meta property="og:image" content={"https://image.thum.io/get/auth/54712-https:/" + location.href} >

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://wiki.proyectograndorder.es">
    <meta property="twitter:title" content="{seoTitle}">
    <meta property="twitter:description" content="{seoDescription}">
    <meta property="twitter:image" content={"https://image.thum.io/get/auth/54712-https:/" + location.href} >
</svelte:head>