<template>
    <div class="loading-modal">
        <div class="spinner"></div>
    </div>
</template>

<script>
export default {
    name: 'LoadingModal',
};
</script>

<style scoped>
    .loading-modal {
        box-sizing: border-box;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
    }
    .spinner {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        border: 10px solid black;
        background-color: white;
        overflow: hidden;
        position: relative;
        animation: load 1.2s linear 0s infinite;
    }
    @keyframes load {
        0% {
            transform: rotateZ(0);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
    .spinner:before {
        position: absolute;
        content: "";
        width: 120px;
        height: 60px;
        background-color: red;
        border-bottom: 10px solid #000;
        left: 0;
        top: -5px;
    }
    .spinner:after {
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        background-color: white;
        border: 5px solid black;
        bottom: 45px;
        right: 45px;
        border-radius: 50%;
    }
</style>
