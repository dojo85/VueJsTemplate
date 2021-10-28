const app = Vue.createApp({
    data() {
        return {
            greeting: "Hello World!"            
        }
    },
    computed: {

    },
    methods: {
        
    }
});

// mount. place components before this line
const vm = app.mount('#app');