import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import createPersistedState from 'pinia-plugin-persistedstate';
import "styles/index.scss";

const app = createApp(App)
const pinia = createPinia()
pinia.use(createPersistedState)

app.use(router).use(pinia)
app.mount('#app')
