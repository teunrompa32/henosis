<script>
	import { onMount } from 'svelte';
	import p5 from 'p5';

	let canvas;

	onMount(() => {
		const sketch = (p) => {
			p.setup = () => {
				canvas = p.createCanvas(400, 400);
				p.background(200);
			};

			p.draw = () => {
				p.fill(255, 0, 0);
				p.ellipse(p.mouseX, p.mouseY, 50, 50);
			};
		};

		new p5(sketch);
	});
</script>

<h2>Heard an amazing set? here you can listen back to it!</h2>

<div bind:canvas></div>
