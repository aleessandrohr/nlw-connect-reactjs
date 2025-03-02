import { defineConfig } from "orval";

export default defineConfig({
	api: {
		input: "http://localhost:3333/docs/json",
		output: {
			biome: true,
			prettier: true,
			tslint: true,
			target: "./src/http/api.ts",
			client: "react-query",
			httpClient: "axios",
			clean: true,
			baseUrl:
				process.env.NODE_ENV === "development" ? "http://localhost:3333" : "",
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
