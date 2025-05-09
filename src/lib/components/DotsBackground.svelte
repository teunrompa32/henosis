<script lang="ts">
	import Dot from '$lib/classes/Dot.js';
	import P5, { type Sketch } from 'p5-svelte';

	//Varables
	let canvasContainer: HTMLDivElement;
	let dots: Dot[] = [];
	let dotSize = 10;
	let mousePos = { x: 0, y: 0 };
	const spacing = dotSize * 2;

	//get canvas container width and height

	const sketch: Sketch = (p) => {
		p.setup = () => {
			let canvasHeight = canvasContainer.clientHeight;
			let canvasWidth = canvasContainer.clientWidth;

			p.createCanvas(canvasContainer.clientWidth, canvasContainer.clientHeight);
			for (let i = 0; i < canvasWidth; i += spacing) {
				for (let j = 0; j < canvasHeight; j += spacing) {
					let dot = new Dot(p, i + spacing / 2, j + spacing / 2, dotSize);
					dots.push(dot);
				}
			}
		};

		p.draw = () => {
			mousePos = { x: p.mouseX, y: p.mouseY };
			p.clear();
			dots.forEach((dot) => {
				dot.update(mousePos);
				dot.render();
			});
		};
	};
</script>

<div id="canvas-container" bind:this={canvasContainer}>
	<P5 {sketch} />
</div>

<style>
	#canvas-container {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		overflow: hidden;
	}
</style>
