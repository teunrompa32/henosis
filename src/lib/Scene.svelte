<script lang='ts'>
    import {T, useTask, useLoader} from  '@threlte/core';
    import {interactivity} from '@threlte/extras';
    import {GLTFLoader, type GLTF} from 'three/examples/jsm/loaders/GLTFLoader.js';
    import {AmbientLight, Color, MeshStandardMaterial} from 'three';

    const gltf = useLoader(GLTFLoader).load('/models/logo_3d.glb');

    let updatedMaterial: MeshStandardMaterial;

    function setMaterial(model: GLTF): void{
        const scene = model.scene;
        const mesh = scene.children[0];

        mesh.material = new MeshStandardMaterial({
            color: new Color(220,23,0),
            roughness: 0.5,
            metalness: 0.5
        });

        updatedMaterial = mesh.material;
        console.log("mesh.material", mesh.material);
    }

    gltf.then((model) => {{
        setMaterial(model);
    }})   
    


    let rotation = 0;

    useTask((delta) =>{
        rotation += delta;
    })

    interactivity()
</script>

{#if $gltf}
    <T.Group
        scale={[10, 10, 10]}
    >
    <T.AmbientLight ></T.AmbientLight>
    <T.DirectionalLight position={[5,5,5]}/>
        <T.Mesh 
        castShadow 
        receiveShadow
        rotation={[0, rotation, 0]}
        geometry={$gltf.scene.children[0].geometry}
        material={updatedMaterial}
        position={[0, 0, 0]}
        ></T.Mesh>
    </T.Group>
{/if}