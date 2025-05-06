<script>
	let { data } = $props();
</script>

<div class="title-container">
	<h2>Events:</h2>
</div>

{#await data.events then events}
	{#each events as event}
		<div class="event-card">
			<h3>Event Title: {event.name}</h3>
			<p>{event.description}</p>
		</div>
	{/each}
{/await}

<style>
	h2 {
		font-size: 2em;
	}
	.event-card {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.event-card h3 {
		margin: 0 0 5px;
		font-size: 1.5em;
	}
	.event-card p {
		margin: 0;
	}
</style>
