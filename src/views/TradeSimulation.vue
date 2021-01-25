<template>
    <div class="trade-container">
        <p>Adicione Pokémons para a troca.</p>
        <div class="trade-groups">
            <TradeGroup
                :pokemons="myPokemons.pokemons"
                @add="onAddPokemon(myPokemons, $event)"
                :error="myPokemons.error"/>
            <TradeGroup
                :pokemons="otherPokemons.pokemons"
                @add="onAddPokemon(otherPokemons, $event)"
                :error="otherPokemons.error"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import TradeGroup from '@/components/TradeGroup.vue';

export default {
    name: 'TradeSimulation',
    components: {
        TradeGroup,
    },
    data: function() {
        return {
            myPokemons: {
                pokemons: new Array(6).fill(null),
                error: ''
            },
            otherPokemons: {
                pokemons: new Array(6).fill(null),
                error: ''
            }
        }
    },
    methods: {
        onAddPokemon: function (group, data) {
            group.error = '';
            const emptySpot = group.pokemons.findIndex((spot) => {
                return spot === null;
            });
            if (emptySpot == 1) {
                group.error = 'Não é possível adicionar mais Pokémons!'
                return;
            }
            axios.get(`${process.env.VUE_APP_POKETRADER_API_URL}/api/pokemons/${data}`)
            .then((response) => {
                this.$set(group.pokemons, emptySpot, response.data.pokemon);
            }).catch((error) => {
                console.log(error.response);
                group.error = 'Não foi possível adicionar esse Pokémon. Confira o nome e tente novamente.'
            })
        }
    },
    created: function() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('user-token')}`;
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
