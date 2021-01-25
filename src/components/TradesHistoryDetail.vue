<template>
    <div class="trade-container">
        <div class="trade-controls">
            <a href="#" class="trade-control" @click="$emit('goBack')">Voltar</a>
        </div>
        <div class="trade-groups">
            <TradeGroup
                displayOnly=true
                trainerInfo="Meus Pokémons"
                :pokemons="trade.groups[0].pokemons"
                :benefitted="trade.groups[0].wasBenefitted"/>
            <TradeGroup
                displayOnly=true
                trainerInfo="Pokémons do Outro Treinador"
                :pokemons="trade.groups[1].pokemons"
                :benefitted="trade.groups[1].wasBenefitted"/>
        </div>
    </div>
</template>

<script>
import TradeGroup from '@/components/TradeGroup.vue';

export default {
    name: 'TradesHistoryDetail',
    components: {
        TradeGroup,
    },
    props: ['trade'],
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

    @media (max-width: 1200px) {
        .trade-groups {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>
