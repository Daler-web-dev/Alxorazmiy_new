/* eslint-disable no-unused-vars */
import Vue from "vue"
import VueRouter from "vue-router"
import home from "../components/pages/home"
import admin from "../components/admin/admin.vue"

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: home
	},
	{
		path: "/admin",
		name: "admin",
		component: admin
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
