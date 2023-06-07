import './bootstrap';
import { createApp } from 'vue';

import Register from './components/Register.vue';
import Login from './components/Login.vue';
// import Logout from './components/Logout.vue';

const app = createApp({
    components:{
        Register,
        Login,
        // Logout
    }
});

app.mount("#app");