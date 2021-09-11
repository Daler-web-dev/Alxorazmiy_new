<template>
	<header>
		<div class="side-left">
			<h3>{{ title || 'No prop' }}</h3>
			<input @keyup="SearchItem()" placeholder="Поиск по всем заявкам" v-if="search != false" type="text">

			<div v-if="tumblrs != false" class="flex tumblrs">
				<div class="tumblr-div">
					<button :disabled="table == false" @click="changeTableDesign('background')" :class="{ 'disabled': table == false }" class="tumblr cursor"><div></div></button>
					<span class="grey">Фон элементов</span>
				</div>
				<div class="tumblr-div">
					<button :disabled="table == false" @click="changeTableDesign('number')" :class="{ 'disabled': table == false }" class="tumblr cursor"><div></div></button>
					<span class="grey">No</span>
				</div>
				<div class="tumblr-div">
					<button :disabled="table == false" @click="changeTableDesign('time')" :class="{ 'disabled': table == false }" class="tumblr cursor"><div></div></button>
					<span class="grey">Время</span>
				</div>
				<div class="tumblr-div">
					<button @click="changeTableDesign('grid')" class="tumblr cursor"><div></div></button>
					<span class="grey">Показать как плитку</span>
				</div>
			</div>
		</div>
		<div class="side-right">
			<div class="total" v-if="money !== false">
				<span>Общая прибыль с заявок:</span>
				<h3>{{ money }}<span>сум</span></h3>
			</div>
		</div>
	</header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	data() {
		return {
			
		}
	},
	methods: {
		...mapActions([
			
		])
	},
	props: [
		'title',
		'table',
		'search',
		'tumblrs',
		'money',
		'changeTableDesign',
		'SearchItem',
	]
}
</script>

<style scoped>
	header input {
		background-image: url('../../../public/images/icons/feather-search.svg');
		background-position: 15px center;
		background-repeat: no-repeat;
		padding-left: 37px;
	}
</style>
