import {createRouter, createWebHashHistory} from 'vue-router';

import AboutPage from '../modules/pokemon/pages/AboutPage.vue';
import ListPage from '../modules/pokemon/pages/ListPage.vue';
import PokemonPage from '../modules/pokemon/pages/PokemonPage.vue';
import NotFoundPage from '../modules/shared/pages/NotFoundPage.vue';

const routes = [
	{path: '/', component: ListPage},
	{path: '/about', component: AboutPage},
	{path: '/id', component: PokemonPage},
	{path: '/:pathMath(.*)*', component: NotFoundPage}, // error 404
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
