import { createApp } from 'vue'
 
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import profile from './components/profile.vue'
 
const app = createApp(App)
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('profile', profile)
app.mount('#app') 