<script setup lang="ts">
	import { RouterView } from "vue-router";
</script>

<template>
	<div>
		<div
			class="fixed top-0 left-0 w-full shadow-lg z-10 flex items-center justify-between"
		>
			<a href="/" target="_blank">
				<img src="/vite.svg" class="logo" alt="Vite logo" />
			</a>
			<div class="flex gap-8 text-xl">
				<div><RouterLink to="/">Home</RouterLink></div>
				<div><RouterLink to="/form">Form</RouterLink></div>
			</div>
			<a href="/" target="_blank">
				<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
			</a>
		</div>
		<div>
			<RouterView />
		</div>
	</div>
</template>

<style scoped>
	.logo {
		height: 6.5em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>
