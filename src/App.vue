<template>
    <div id="app">
        <Login/>
    </div>
</template>

<script>
import Login from '@/views/Login.vue'

export default {
    name: 'App',
    components: {
    Login
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
