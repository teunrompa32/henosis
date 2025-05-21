<script lang="ts">
	import P5, { type Sketch } from 'p5-svelte';
	let canvasContainer: HTMLDivElement;

	const sketch: Sketch = (p) => {
		p.setup = () => {
			p.createCanvas(canvasContainer.clientWidth, canvasContainer.clientHeight, p.WEBGL);
		};

		p.draw = () => {
			p.clear();
			p.background(0);
			p.fill(255);
			p.rotateX(p.radians(p.frameCount * 3));
			p.rotateZ(p.radians(p.frameCount));
			p.directionalLight(255, 255, 255, 0, 0, -1);
			p.box(800, 100, 100);
		};
	};
</script>

<h2>asci template</h2>

<div id="canvas-container" bind:this={canvasContainer}>
	<P5 {sketch} />
</div>

<style>
	#canvas-container {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 0;
		overflow: hidden;
	}
</style>
