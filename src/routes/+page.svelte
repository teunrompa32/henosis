<script>
    import {Canvas} from '@threlte/core'
    import Scene  from '$lib/Scene.svelte';
</script>

<div class='canvas'>
<Canvas >
    <Scene/>
</Canvas>
</div>



<style>
    .canvas {
        width: 100%;
        height: 100%;
        position: 'absolute';
        background-color: gradient(180deg, #000000 0%, #000000 100%);

    }
</style>