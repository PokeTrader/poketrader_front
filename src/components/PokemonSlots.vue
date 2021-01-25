<template>
    <div class="poke-slots">
        <PokemonSlot
            v-for="(pokemon, index) in pokemons"
            :key="index" :pokemon="pokemon"/>
    </div>
</template>

<script>
import PokemonSlot from '@/components/PokemonSlot.vue';

export default {
    name: 'TradeGroup',
    props: ['pokemons'],
    components: {
        PokemonSlot
    },
    data: function() {
        return {};
    },
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

    .poke-slots {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
