<template>
    <div class="trade-container">
        <p>Adicione Pokémons para a troca.</p>
        <div class="trade-groups">
            <TradeGroup :pokemons="myPokemons"/>
            <TradeGroup :pokemons="otherPokemons"/>
        </div>
    </div>
</template>

<script>
import TradeGroup from '@/components/TradeGroup.vue';

export default {
    name: 'TradeSimulation',
    components: {
        TradeGroup,
    },
    data: function() {
        return {
            myPokemons: [
                {
                    name: 'Ditto',
                    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                },
                null, null, null, null, null
            ],
            otherPokemons: [
                {
                    name: 'Gengar',
                    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
                },
                null, null, null, null, null
            ]
        }
    }
};
</script>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

    .trade-container {
        display: flex;
        margin: auto;
        width: 80%;
        flex-direction: column;
        border: 1px solid rgb(0, 0, 0, 0.4);
        padding: 3rem;
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),
                    0 2px 2px 0 rgba(0,0,0,.14),
                    0 1px 5px 0 rgba(0,0,0,.12);
        border-radius: 4px;
        background-color: #fff;

        font-family: 'JetBrains Mono', monospace;
    }

    .trade-groups {
        display: flex;
        justify-content: space-between;
    }

    
    
</style>
