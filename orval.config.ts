import { defineConfig } from "orval";

const API_URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:3333/docs/json"
		: "https://nlw-connect-nodejs-aone.onrender.com/docs/json";

export default defineConfig({
	api: {
		input: API_URL,
		output: {
			biome: true,
			prettier: true,
			tslint: true,
			target: "./src/http/api.ts",
			client: "react-query",
			httpClient: "axios",
			clean: true,
			baseUrl:
				process.env.NODE_ENV === "development"
					? "http://localhost:3333"
					: "https://nlw-connect-nodejs-aone.onrender.com",
			override: {
				mutator: {
					path: "./src/libs/api.ts",
					name: "customInstance",
				},
				fetch: {
					includeHttpResponseReturnType: false,
				},
			},
		},
	},
});
