<template>
    <div class="login-card">
        <div class="login-card--fields">
            <p>Bem vindo ao PokéTrader! Entre agora ou crie uma nova conta.</p>
            <div class="form-control">
                <label for="username">Nome de usuário:</label>
                <input type="text" name="username" id="username">
            </div>
            <div class="form-control">
                <label for="password">Senha:</label>
                <input type="password" name="password" id="password">
            </div>
        </div>
        <button class="button">Entrar</button>
        <button class="button">Cadastrar</button>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

    .login-card {
        display: flex;
        max-width: 450px;
        margin: auto;
        flex-direction: column;
        border: 1px solid rgb(0, 0, 0, 0.4);
        padding: 3rem;
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),
                    0 2px 2px 0 rgba(0,0,0,.14),
                    0 1px 5px 0 rgba(0,0,0,.12);
        border-radius: 4px;

        background: linear-gradient(
        to bottom,
        rgb(182, 183, 95, 0.8),
        rgb(182, 183, 95, 0.8), 50%,
        rgb(136, 152, 40, 0.8) 50%,
        rgb(136, 152, 40, 0.8)
        );
        background-size: 100% 8px;

        font-family: 'JetBrains Mono', monospace;
    }

    .login-card--fields {
        background-color: #fff;
        padding: 1rem;
        box-shadow:
        0 0 0 5px #706880,
        0 0 0 10px #3C3F53;
        margin-bottom: 1.5rem;
    }

    .form-control {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }

    .button {
        padding: .7rem;
        min-width: 300px;
        align-self: center;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: #7058B0;
        border: 4px solid #484860;
        color: white;
        border-radius: 25px;
        cursor: pointer;

        font-family: 'JetBrains Mono', monospace;

    }

    .button:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }

    .button:hover, .button:focus {
        background-color: #A070F0;
        border: 4px solid #F87030;
    }
</style>
