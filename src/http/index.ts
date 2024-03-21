import axios, { AxiosRequestConfig } from 'axios'
import { serverUrl } from './url'

const api = axios.create({
	baseURL: `${serverUrl}api`
})

async function onFetch<R, T>(cf: AxiosRequestConfig<T>) {
	const response = await api<R>(cf)
	const data = await response.data
	return data as R
}

export default onFetch
