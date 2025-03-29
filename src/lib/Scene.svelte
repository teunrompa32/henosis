<script lang='ts'>
    import {T, useTask, useLoader} from  '@threlte/core';
    import {interactivity} from '@threlte/extras';
    import {GLTFLoader, type GLTF} from 'three/examples/jsm/loaders/GLTFLoader.js';
    import {AmbientLight, BufferGeometry, Color, Mesh, MeshStandardMaterial, Scene} from 'three';
    import {useThrelte} from '@threlte/core';
	import { onMount } from 'svelte';

    const {scene, camera, renderer } = useThrelte();

    const gltf = useLoader(GLTFLoader).load('/models/logo_3d.glb');

    let updatedMaterial: MeshStandardMaterial;
    let geometry : BufferGeometry;
    let mouseX = 0;
    let mouseY = 0;

    function setMaterial(model: GLTF): void{
        const scene = model.scene;
        const mesh = scene.children[0] as Mesh;

        mesh.material = new MeshStandardMaterial({
            color: new Color(0xc0c0c0c0),
            roughness: 0.1,
            metalness: 0.9
        });

        updatedMaterial = mesh.material as MeshStandardMaterial;
        geometry = mesh.geometry as BufferGeometry;

        console.log("mesh.material", mesh.material);
    }

    const onMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    gltf.then((model) => {{
        setMaterial(model);
    }})   

    let rotation = 0;

    useTask(() =>{
        rotation += mouseX * Math.PI;
    })

    onMount(() => {
        scene.background = new Color(0x121212);
    })

    interactivity()
</script>

{#if $gltf}
<T.Scene>
    <T.Group 
        scale={[0.01, 0.01, 0.01]}
    >
    <T.DirectionalLight intensity={20} position={[0,0,10]}/>
    <T.AmbientLight color={0x404040} intensity={20}></T.AmbientLight>
    <T.Mesh 
        castShadow 
        receiveShadow
        rotation={[mouseY * Math.PI / 4, mouseX * Math.PI / 4, 90]}
        geometry={geometry}
        material={updatedMaterial}
        position={[0, 0, 0]}
        ></T.Mesh>
    </T.Group>

</T.Scene>
{/if}