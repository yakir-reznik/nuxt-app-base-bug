// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		baseURL: "/some-folder/",
		// baseURL: "/some-folder",
		// baseURL: "some-folder/",
		// baseURL: "some-folder",
		// Same error occurs - Does not matter if we specify the baseURL with or without slashes
	},
});
