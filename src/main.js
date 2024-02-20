import { createApp } from 'vue';
import App from './App.vue';
import baseCard from './components/UI/BaseCard.vue'
createApp(App).mount('#app');
App.components(baseCard);
