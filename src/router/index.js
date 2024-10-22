import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/new',
		name: 'NewHome',
		component: () => import('../views/NewHome.vue')
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
