<template>
    <div class="login-container">
        <LoadingModal v-if="loading"/>
        <LoginCard
            :error="error"
            @register="onSubmitRegister"
            @signin="onSubmitSignin"/>
    </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
import LoginCard from '@/components/LoginCard.vue';
import LoadingModal from '@/components/LoadingModal.vue';

export default {
    name: 'Login',
    components: {
        LoginCard,
        LoadingModal
    },
    data: function() {
        return {
            loading: false,
            error: ''
        };
    },
    methods: {
        onSubmitRegister (data) {
            this.loading = true;
            axios.post(`${process.env.VUE_APP_POKETRADER_API_URL}/api/users/register`, {
                'user': {
                    'username': data.username,
                    'password': data.password
                }
            }).then((response) => {
                this.storeToken(response.data.token);
            }).catch((error) => {
                this.error = error.response.data.errors;
            }).finally(() => this.loading = false);
        },
        onSubmitSignin (data) {
            this.loading = true;

            axios.post(`${process.env.VUE_APP_POKETRADER_API_URL}/api/users/signin`, {
                'user': {
                    'username': data.username,
                    'password': data.password
                }
            }).then((response) => {
                this.storeToken(response.data.token);
            }).catch((error) => {
                this.error = error.response.data.errors;
            }).finally(() => this.loading = false);
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
