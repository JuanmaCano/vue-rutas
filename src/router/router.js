import { createRouter, createWebHashHistory } from "vue-router";

// carga todo al comienzo
/* import AboutPage from '../modules/pokemon/pages/AboutPage.vue';
import ListPage from "../modules/pokemon/pages/ListPage.vue";
import PokemonPage from "../modules/pokemon/pages/PokemonPage.vue";
import NotFoundPage from "../modules/shared/pages/NotFoundPage.vue"; */

// carga con lazyload, se hace la importación del módulo a demanda
const routes = [
	{
		path: "/",
		component: () => import("../modules/pokemon/pages/ListPage.vue"),
	},
	{
		path: "/about",
		component: () => import("../modules/pokemon/pages/AboutPage.vue"),
	},
	{
		path: "/id",
		component: () => import("../modules/pokemon/pages/PokemonPage.vue"),
	},
	{
		path: "/:pathMath(.*)*", // error 404
		component: () => import("../modules/shared/pages/NotFoundPage.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
