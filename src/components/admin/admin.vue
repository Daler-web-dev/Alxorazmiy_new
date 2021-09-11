<template>
	<div class="body-admin">
        <layoutAside/>
        <layoutHeader :title="'Главная страница'" :search="false" :tumblrs="false" :money="false"/>
        
        <main class="main-admin">
            <div class="side-left fr-3">
                <div class="item">
                    <div class="item-top">
                        <a href="/table/Applications">
                            <h2>Последние заявки</h2>
                        </a>
                    </div>
                    <table border>
                        <tr>
                            <th>No</th>
                            <th>Имя студента</th>
                            <th>Выбранный курс</th>
                            <th>Дата заявки</th>
                            <th>Статус заявки</th>
                        </tr>
                        <tr v-for="item of [1, 2, 3]" :key="item.key">
                            <td>1</td>
                            <td>Alex Adams</td>
                            <td>Frontend</td>
                            <td>15/02</td>
                            <td>Новые</td>
                        </tr>
                    </table>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
import layoutHeader from './header.vue'
import layoutAside from './aside.vue'

export default {

	components: {
        layoutHeader,
        layoutAside,
	}
}
</script>

<style>
@import './style.css';
</style>