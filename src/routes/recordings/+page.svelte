<div class="wrapper">
	<div class="content">
		<div class="page-title">
			<h1>Recordings:</h1>
		</div>
		<p>Recordings page</p>
		<a href="/rec1">recording 1</a>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}
	.content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 20px;
		background: rgba(51, 51, 51, 0.8); /* Added transparency */
		border-radius: 10px;
		margin: 20px;
		max-width: calc(100% - 40px);
	}

	.wrapper {
		height: 100%;
		width: 100%;
	}
</style>
