<script lang="ts">
	import Dot from '$lib/classes/Dot.js';
	import P5 from 'p5-svelte';

	let sketch = (p: P5) => {
		let dot = new Dot(p, 0, 0, 10);

		p.setup = () => {
			p.createCanvas(400, 400);
			p.background(200);
		};

		p.draw = () => {
			dot.render();
		};
	};
</script>

<h2>Heard an amazing set? here you can listen back to it!</h2>

<P5 {sketch}></P5>

<style></style>
