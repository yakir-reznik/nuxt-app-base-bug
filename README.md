# This repo has been made to reproduce a bug with app.baseURL in nuxt version 3.3.8

## Bug description
When a value is set to **app.baseURL** option in **nuxt.config.ts** routes whose filename start with the app.base throw an error when running *npm run generate* command.

## Example
```bash
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    baseURL: "/some-folder/"
  }
})
```

```bash
// /pages/some-folder-page.vue
export default defineNuxtConfig({
  app: {
    baseURL: "/some-folder/"
  }
})
```

When i run *"npm run generate"* i get this error (also attaching image): 
```bash
Errors prerendering:
  ├─ /some-folder-page (56ms)
  │ └── Error: [404] Cannot find any route matching -page.
```

![screenshot](/public/screenshot.png)

## Additional notes
I have also tried defining the **app.baseURL** with and without slashes like "/value", "value/", "/value/" & "value".
The error happens in all cases.


