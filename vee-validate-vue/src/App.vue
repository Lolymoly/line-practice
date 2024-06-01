<script setup lang="ts">
	import { RouterView } from "vue-router";
</script>

<template>
	<div>
		<div
			class="flex w-full shadow-lg z-10 items-center justify-between bg-[#2a2a35] px-12"
		>
			<a href="/">
				<img src="/vite.svg" class="logo" alt="Vite logo" />
			</a>
			<div class="flex gap-8 text-xl">
				<div><RouterLink to="/">Home</RouterLink></div>
				<div><RouterLink to="/form">Form</RouterLink></div>
			</div>
			<a href="/">
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
		padding: 1.5em 0;
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
