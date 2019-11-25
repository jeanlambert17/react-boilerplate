import axios from 'axios';
import chalk from 'chalk';

const { error } = console;

const instance = axios.create({
	baseURL: process.env.API_URL,
	// Modify this
	timeout: 15000,
	responseType: 'json'
});

export const handleResponseSuccess = (res) => {
	return res;
};

export const handleResponseError = (error) => {
	error(`${chalk.bgRed(error.response.status)}: ${chalk.red(
		error.response.statusText
	)}
     ${chalk.red(error.response.data.message || 'Unknown error')}`);
	return Promise.reject(error);
};

export const handleRequestConfig = (config) => {
	return config;
};

export const handleRequestError = (err) => {
	error(`${chalk.bgRed('Request error')}:
     ${chalk.red(JSON.stringify(err.request))}`);
	return Promise.reject(error);
};

// Request interceptor
instance.interceptors.request.use(handleRequestConfig, handleRequestError);
// Response interceptor
instance.interceptors.response.use(handleResponseSuccess, handleResponseError);

export default instance;
