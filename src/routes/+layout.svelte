<script lang="ts">
	import '../app.css';
	import SideBar from '$lib/components/SideBar.svelte';
	import DotsBackground from '$lib/components/DotsBackground.svelte';

	let { children } = $props();
</script>

<div class="wrapper">
	<div class="header">
		<div class="title">
			<h1>Henosis</h1>
		</div>
		<div class="subtitle">
			<p>Unity, Respect, Equality</p>
		</div>
	</div>
	<div class="content">
		<div class="side-bar-menu">
			<SideBar></SideBar>
		</div>
		<div class="main-content">
			<div class="dots-container">
				<DotsBackground></DotsBackground>
			</div>
			{@render children()}
		</div>
	</div>
</div>

<style lang="css">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'NK57MonospaceBK-Regular';
		color: #fbfbfb;
	}

	.wrapper {
		padding-left: 50px;
		background: #404040;
	}

	.header {
		padding: 25px 0px;
	}

	.content {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: 1fr;
		height: 100vh;
		width: 100%;
		font-size: 16px;
		line-height: 1.5;
	}
	.dots-container {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.main-content {
		display: flex;
		flex-direction: column;
		gap: 45px;
		background: #333333;
		padding: 20px;
		margin-right: 20px;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
	}
</style>
