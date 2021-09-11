import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        AllData: [

        ],
        questions: [
            {
                id: Math.random(),
                question: 'Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim?',
                answer: 'Phasellus risus turpis, pretium sit ametPhasellus risus turpis, pretium sit ametPhasellus risus turpis, pretium sit amet',
                isActive: false
            },
            {
                id: Math.random(),
                question: 'Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim?',
                answer: 'Phasellus risus turpis, pretium sit ametPhasellus risus turpis, pretium sit ametPhasellus risus turpis, pretium sit amet',
                isActive: false
            },
            {
                id: Math.random(),
                question: 'Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim?',
                answer: 'Phasellus risus turpis, pretium sit ametPhasellus risus turpis, pretium sit ametPhasellus risus turpis, pretium sit amet',
                isActive: false
            },
        ],
        lessonsBox: [
            {
                heading: 'Возможность изучения второго иностранного языка',
                description: 'Возможность изучения второго иностранного языка',
            },
            {
                heading: 'Учебные проекты, образовательный туризм',
                description: 'Математическая офлайн-школа в Самарканде для детей от 6 до 12 лет',
            },
            {
                heading: 'Творческие и спортивные студии, кружки, секции',
                description: 'Математическая офлайн-школа в Самарканде для детей от 6 до 12 лет',
            },
            {
                heading: 'Собственное здание, охраняемая территория',
                description: 'Математическая офлайн-школа в Самарканде для детей от 6 до 12 лет',
            }
        ],
        animation: {
            modalform: true
            
        }
    },
    getters: {
        AllData: state => state.AllData,
        scores: state => state.scores,
        questions: state => state.questions,
        animation: state => state.animation,
        lessonsBox: state => state.lessonsBox
    },
    mutations: {
        showText(store, data) {
            let finded = store.questions.find(item => item.id == data)
            finded.isActive = !finded.isActive
        },
        hideform(store, data) {
            store.animation.modalform = !store.animation.modalform
            let body = document.querySelector('body')

            body.style.overflowY = 'scroll'
        },
        showform(store, data) {
            store.animation.modalform = !store.animation.modalform
            let body = document.querySelector('body')

            body.style.overflow = 'hidden'
        },
        // API METHODS
		async Add(state, data) {
			for (let item in state.Form) {
				state.Form[item] = false
			}
			
			if (data.status == 200 && data.data.ok == true) {
				state.Form.BlurredBg = true
				state.Form.Success = true

				setTimeout(() => {
					state.Form.BlurredBg = false
					state.Form.Success = false

					document.body.style.overflowY = 'scroll'
				}, 6000)
			} else {
				if (data == 'no_server') {
					state.Form.BlurredBg = true
					state.Error.Status = true
					state.Error.Text = 'Ошибка. Сервер выключен'
				} else if (data == 'no_response') {
					state.Form.BlurredBg = true
					state.Error.Status = true
					state.Error.Text = 'Ошибка. Пожалуйста, заполните все поля'
				} else {
					state.Form.BlurredBg = true
					state.Error.Status = true
					state.Error.Text = 'Простите, произошла неизвестная ошибка'
				}
			}
		}
        // API METHODS END
    },
    actions: {
        showText({ commit }, data) {
            commit('showText', data)
        },
        hideform({ commit }, data) {
            commit('hideform', data)
        },
        showform({ commit }, data) {
            commit('showform', data)
        },
        // API ACTIONS
		async Patch({ commit, dispatch }, data) {
			event.preventDefault()
			
			await api.patch(data)
				.then(res => {
					commit('Patch', res.data)
				})
				.catch((error) => {
					let err_res = ''

					if (error.response) {
						commit('Add', err_res = 'no_response')
					} else if (error.request) {
						commit('Add', err_res = 'no_server')
					} else {
						commit('Add', err_res = 'server_error')
					}
				})
		},
		async Add({ commit, dispatch }, data) {
			event.preventDefault()

			let formData = new FormData(event.target)

			// Set service here
			formData.append('service', data.service)

			api.add(formData)
				.then(res => {
                    alert('SUCCESS')
					// commit('Add', res)
				})
				.catch((error) => {
                    alert('ERROR')
					// let err_res |= ''

					// if (error.response) {
					// 	commit('Add', err_res = 'no_response')
					// } else if (error.request) {
					// 	commit('Add', err_res = 'no_server')
					// } else {
					// 	commit('Add', err_res = 'server_error')
					// }
				})
		},
        // API ACTIONS END
    },
})