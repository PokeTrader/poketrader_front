<template>
    <div class="add-poke-card">
        <label for="poke-name">Adicionar Pokémon</label>
        <input v-model="name" type="text" name="poke-name">
        <button @click="addPokemon" class="button-add">Adicionar</button>
        <p v-if="error" class="error-message">{{ error }}</p>
    </div>
</template>

<script>
export default {
    name: 'AddPokemonCard',
    props: ['error'],

    data: function() {
        return {
            name: ''
        }
    },

    methods: {
        addPokemon: function() {
            this.$emit('add', this.name);
        }
    },
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

    .add-poke-card {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        background-color: #fff;
        padding: 1rem;
        width: 80%;
        margin: 1rem auto 1rem auto;
        box-shadow:
        0 0 0 2px #706880,
        0 0 0 5px #3C3F53;
    }

    .button-add {
        background-color: #7058B0;
        border: 4px solid #484860;
        color: white;
        font-size: 1rem;
        padding: .3rem .5rem;
        border-radius: 25px;
        min-width: 125px;
        cursor: pointer;

        font-family: 'JetBrains Mono', monospace;
    }

    .button-add:hover, .button-add:focus {
        background-color: #A070F0;
        border: 4px solid #F87030;
    }

    .error-message {
        color: #e3242b;
    }
</style>
