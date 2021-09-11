import axios from 'axios'
import config from '../../vue.config'

export default () => {
	const options = {}
	
	options.baseURL = config.devServer.proxy + '/api'
	options.contentType = 'application/json'
	
	const instance = axios.create(options)
	return instance
}
