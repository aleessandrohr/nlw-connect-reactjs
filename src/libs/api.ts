import Axios, { type AxiosError, type AxiosRequestConfig } from "axios";
import { env } from "process";

export const AXIOS_INSTANCE = Axios.create({
	baseURL: "",
});

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
	const source = Axios.CancelToken.source();
	const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then(
		({ data }) => data
	);

	// @ts-ignore
	promise.cancel = () => {
		source.cancel("Query was cancelled by Vue Query");
	};

	return promise;
};

export default customInstance;

export interface ErrorType<Error> extends AxiosError<Error> {}
