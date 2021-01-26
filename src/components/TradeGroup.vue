<template>
    <div class="trade-group">
        <span class="trainer-info">{{ trainerInfo }} ({{ showExpSum }} exp.)</span>
        <AddPokemonCard v-if="!displayOnly" @add="$emit('add', $event)" :error="error"/>
        <div v-if="benefitted" class="benefitted-warning">
            <p>Este treinador será beneficiado pela troca.</p>
        </div>
        <PokemonSlots :pokemons="pokemons" />
    </div>
</template>

<script>
import { getExpSum } from '@/utils/utils.js';
import AddPokemonCard from '@/components/AddPokemonCard.vue';
import PokemonSlots from '@/components/PokemonSlots.vue';

export default {
    name: 'TradeGroup',
    props: ['pokemons', 'error', 'benefitted', 'displayOnly', 'trainerInfo'],
    components: {
        AddPokemonCard,
        PokemonSlots
    },
    data: function() {
        return {}
    },
    computed: {
        showExpSum: function() {
            return getExpSum(this.pokemons)
        }
    }
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

    @media (max-width: 850px) {
        .trade-group {
            min-width: 300px;
        }

        .trade-group:not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 2rem;
        }
    }
    
    .trainer-info {
        display: inline-block;
        padding: .5rem .7rem;
        margin-bottom: 1rem;
        font-weight: bold;
        background-color: white;
        border: 1px solid black;
    }

    .benefitted-warning {
        background-color: yellow;
        width: 80%;
        margin: auto;
        padding: .4rem;
        box-shadow:
        0 0 0 2px #706880,
        0 0 0 5px #3C3F53;
    }
</style>
