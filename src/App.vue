<template>
    <div id="app">
        <TradesHistory v-if="authenticated"/>
        <Login v-else @authenticated="onAuthStatusChanged"/>
    </div>
</template>

<script>
import Login from '@/views/Login.vue'
// import TradeSimulation from '@/views/TradeSimulation.vue'
import TradesHistory from '@/components/TradesHistory.vue'

export default {
    name: 'App',
    components: {
        Login,
        TradesHistory
        // TradeSimulation
    },
    data: function() {
        return {
            authenticated: false
        }
    },
    methods: {
        checkAuthStatus() {
            this.authenticated = localStorage.getItem('user-token') !== null
        },
        onAuthStatusChanged(status) {
            this.authenticated = status;
        }
    },
    created: function() {
        this.checkAuthStatus();
    }
}
</script>

<style>
#app {
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 98vh;
    background-color: #98D8A0;
    position: relative;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

</style>
