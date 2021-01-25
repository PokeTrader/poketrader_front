<template>
  <div class="login-container">
    <LoginCard
        @register="onSubmitRegister"
        @signin="onSubmitSignin"/>
  </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
import LoginCard from '@/components/LoginCard.vue';

export default {
    name: 'Home',
    components: {
        LoginCard,
    },
    data: function() {
        return {};
    },
    methods: {
        onSubmitRegister (data) {
            axios.post(`${process.env.VUE_APP_POKETRADER_API_URL}/api/users/register`, {
                'user': {
                    'username': data.username,
                    'password': data.password
                }
            }).then((response) => {
                this.storeToken(response.data.token);
            }).catch((error) => {
                console.log(error.response);
            })
        },
        onSubmitSignin (data) {
            axios.post(`${process.env.VUE_APP_POKETRADER_API_URL}/api/users/signin`, {
                'user': {
                    'username': data.username,
                    'password': data.password
                }
            }).then((response) => {
                this.storeToken(response.data.token);
            }).catch((error) => {
                console.log(error.response);
            })
        },
        storeToken(token) {
            localStorage.setItem('user-token', token);
            this.$emit('authenticated', true);
        }
    }
};
</script>

<style scoped>
    .login-container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>
