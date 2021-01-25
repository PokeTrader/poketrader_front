<template>
  <div class="login-container">
    <LoginCard
        @register="onSubmitRegister"
        @signin="onSubmitSignin"/>
  </div>
</template>

<script>
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
            console.log(data);
        },
        onSubmitSignin (data) {
            console.log(data);
        },
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
