import {createApp} from 'vue'
import {createPinia} from 'pinia';
import createPersistedState from 'pinia-plugin-persistedstate';
import router from '@/router'
import App from '@/App.vue'
import "styles/index.scss"

const app = createApp(App)
const pinia = createPinia()
pinia.use(createPersistedState)

app.use(router).use(pinia)
app.mount('#app')
