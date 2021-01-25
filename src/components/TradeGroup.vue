<template>
    <div class="trade-group">
        <AddPokemonCard/>
        <PokemonSlots :pokemons="pokemons" />
    </div>
</template>

<script>
import AddPokemonCard from '@/components/AddPokemonCard.vue';
import PokemonSlots from '@/components/PokemonSlots.vue';

export default {
    name: 'TradeGroup',
    components: {
        AddPokemonCard,
        PokemonSlots
    },
    data: function() {
        return {
            pokemons: new Array(6)
        }
    },
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');
    .trade-group {
        border: 3px solid black;
        min-width: 400px;
        background: linear-gradient(
        to bottom,
        rgb(182, 183, 95, 0.8),
        rgb(182, 183, 95, 0.8), 50%,
        rgb(136, 152, 40, 0.8) 50%,
        rgb(136, 152, 40, 0.8)
        );
        background-size: 100% 8px;
    }

    .trade-group:not(:last-of-type) {
        margin-right: 2rem;
    }
</style>
