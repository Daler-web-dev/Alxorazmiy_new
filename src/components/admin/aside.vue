<template>
    <aside>
        <div class="side-top">
            <div class="logo"></div>
        </div>
        <div class="side-middle">
            <a href="/"><img :class="{ 'active': rl == '' }" src="../../../public/images/icons/home.svg"></a>
            <a href="/table/Applications"><img :class="{ 'active': rl == 'Applications' }" src="../../../public/images/icons/list.svg"></a>
            <a href="/kpi"><img :class="{ 'active': rl == 'kpi' }" src="../../../public/images/icons/kpi.svg"></a>
        </div>
        <div class="side-bottom">
            <a href="/"><img src="../../../public/images/icons/power-button.svg"></a>
        </div>
    </aside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	data() {
		return {
			rl: window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
		}
	},
}
</script>
