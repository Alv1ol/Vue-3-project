import '@/assets/main.css';
import 'primeicons/primeicons.css';
import Aura from '@primevue/themes/aura';
import 'primeflex/primeflex.scss';


import { initializeApp } from "firebase/app";

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice'

import Menubar from 'primevue/menubar';
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Tooltip from 'primevue/tooltip';

import ProgressSpinner from 'primevue/progressspinner';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import Message from 'primevue/message';
import Radio from 'primevue/radiobutton';
import Badge from 'primevue/badge';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import Textarea from 'primevue/textarea';
import ConfirmDialog from 'primevue/confirmdialog';
import Chart from 'primevue/chart';

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyBv6gJjy8cG0upNF8RFxQZNYtHC7Vqe1CE",
  authDomain: "interview-24ac6.firebaseapp.com",
  projectId: "interview-24ac6",
  storageBucket: "interview-24ac6.appspot.com",
  messagingSenderId: "592055433828",
  appId: "1:592055433828:web:dee1c407fc068efcc4fd71"
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});
app.use(ToastService)
app.use(createPinia())
app.use(router)
app.use(ConfirmationService)

app.directive('tooltip', Tooltip)
app.component('my-menubar', Menubar)
app.component('app-toast', Toast)
app.component('app-button', Button)
app.component('app-card', Card)
app.component('app-input-text', InputText)
app.component('app-progress', ProgressSpinner)
app.component('app-datatable', DataTable)
app.component('app-column', Column)
app.component('app-dialog', Dialog)
app.component('app-message', Message)
app.component('app-radio', Radio)
app.component('app-badge', Badge)
app.component('app-calendar', Calendar)
app.component('app-input-number', InputNumber)
app.component('app-textarea', Textarea)
app.component('app-dialog', ConfirmDialog)
app.component('app-chart', Chart)

app.mount('#app')
