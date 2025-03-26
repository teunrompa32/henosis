<script>
    import {T, useTask, useLoader} from  '@threlte/core';
    import {interactivity} from '@threlte/extras';
    import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

    const gltf = useLoader(GLTFLoader).load('/models/logo_3d.glb');

    let rotation = 0;

    useTask((delta) =>{
        rotation += delta;
    })

    interactivity()
</script>

{#if $gltf}
    <T scale={[30,30,30]} rotation.y={rotation} is={$gltf.scene} />
{/if}