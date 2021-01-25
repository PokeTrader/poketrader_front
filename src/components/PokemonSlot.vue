<template>
    <div class="poke-slot" :class="{ 'poke-slot--empty': !pokemon }">
        <img v-if="pokemon" :src="pokemon.sprite" :alt="pokemon.name">
        <p v-if="pokemon">{{ pokemon.name | capitalize }}</p>
    </div>
</template>

<script>
export default {
    name: 'AddPokemonCard',
    props: ['pokemon'],
    data: function() {
        return {}
    },
    filters: {
    capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

    .poke-slot {
        border: 3px solid black;
        background-color: #3890D8;
        background: linear-gradient(
            to bottom,
            #3890D8,
            #3890D8 75%,
            #80C0D8 75%,
            #80C0D8
        );
        height: 75px;
                border-radius: 5px;

        margin: 1rem .5rem;
        display: flex;
        align-items: center;
        color: white;
        font-weight: bold;
        width: 100%;
        flex: 0 40%;
        width: 200px;
        box-sizing: border-box;
    }

    .poke-slot--empty {
        border: 3px solid black;
        background: transparent;
        height: 75px;
        box-shadow: 2px 2px 1px #000;
    }
</style>
