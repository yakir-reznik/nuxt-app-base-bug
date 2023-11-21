<template>
	<h1>This is another route</h1>
	<p>at /pages/some-folder-page.vue</p>
	<hr />
	<p>
		This route throws an error when running <i>npm run generate</i> because
		the route filename starts with same string as the <i>app.baseURL</i> in
		<i>nuxt.config.ts ('/some-folder/')</i>
	</p>
</template>
