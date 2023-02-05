import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import '@/assets/css/fonts.css'
import '@/assets/css/base.css'
import '@/assets/css/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide("shoppingListKey", "shoppingList"); // localStorage key

app.mount('#app')
