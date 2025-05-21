<script>
	import { onMount } from 'svelte';

	let events = [];

	async function loadEvents() {
		const response = await fetch('/api/sync-events');

		events = await response.json();
		console.log('Events loaded:', events);
	}

	onMount(() => {
		loadEvents();
	});
</script>

<div class="title-container">
	<h2>Events:</h2>
</div>

{#each events as event}
	<div class="event-card">
		<div class="event-title">
			<h3>{event.summary}</h3>
		</div>
		<div class="event-date">
			<p>{event.start.dateTime || event.start.date}</p>
		</div>
	</div>
{/each}

<style>
	h2 {
		font-size: 2em;
	}
	.event-card {
		display: flex;
		flex-direction: column;

		background-color: #f0f0f04b;
		padding: 10px;
	}

	.event-title {
		margin-bottom: 30px;
	}

	.event-card h3 {
		margin: 0 0 5px;
		font-size: 1.5em;
	}
	.event-card p {
		margin: 0;
	}
</style>
