// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
	},
	{
		path: "/form",
		name: "Form",
		component: FormView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
