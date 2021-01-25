<template>
    <div id="app">
        <nav id="nav" v-if="authenticated">
            <ul>
                <li class="nav-item" @click="seeSimulation">
                    <a href="#">Simular</a>
                </li>
                <li class="nav-item" @click="seeHistory">
                    <a href="#">Histórico</a>
                </li>
                <li class="nav-item">
                    <a href="#">Logout</a>
                </li>
            </ul>
        </nav>
        <TradeSimulation v-if="authenticated && simulationView"/>
        <TradesHistory v-if="authenticated && historyView"/>
        <Login v-if="!authenticated" @authenticated="onAuthStatusChanged"/>
    </div>
</template>

<script>
import Login from '@/views/Login.vue'
import TradeSimulation from '@/views/TradeSimulation.vue'
import TradesHistory from '@/components/TradesHistory.vue'

export default {
    name: 'App',
    components: {
        Login,
        TradesHistory,
        TradeSimulation
    },
    data: function() {
        return {
            authenticated: false,
            simulationView: true,
            historyView: false
        }
    },
    methods: {
        checkAuthStatus() {
            this.authenticated = localStorage.getItem('user-token') !== null
        },
        onAuthStatusChanged(status) {
            this.authenticated = status;
        },
        seeSimulation() {
            this.simulationView = true;
            this.historyView = false;
        },
        seeHistory() {
            this.historyView = true;
            this.simulationView = false;
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

#nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
}

.nav-item {
    padding: 0 1rem 0 1rem;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

</style>
