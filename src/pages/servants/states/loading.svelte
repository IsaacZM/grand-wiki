<script type="ts">
    import { fade } from "svelte/transition";
    import * as lib from "./libs/index";

    const text = lib.randomText();
    const image = lib.randomImage();    
</script>

<div transition:fade={{duration: 1000, delay: 250}} class="container-fluid p-5 loading">
    <img alt="loading" style="height: 300px;" src="{image}">
    <h1>{text}</h1>
</div>

<style>
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;  
        transform: translate(-50%, -50%);
        color: white;
        background-color: #23272a;
        text-align: center;
    }
</style>