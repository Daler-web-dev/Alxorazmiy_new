/* eslint-disable no-console */
import index from './index'

export default {
	// patch(data) {
	// 	return api().patch('admin/patch', data)
	// },
	add(data) {
		return index().post('admin/add', data)
	},
	// auth(data) {
	// 	return api().post('admin/auth', data)
	// },
	// GetData(data) {
	// 	return api().get('/get/' + data.service)
	// },
	// GetCheck(data) {
	// 	return api().get('/GetCheck')
	// },
	// GetCourse(data) {
	// 	return api().get('/GetCourse/' + data.element)
	// },
	// GetJob(data) {
	// 	return api().get('/GetJob/' + data.element)
	// },
}
