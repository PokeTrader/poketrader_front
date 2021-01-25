<template>
    <div class="trade-container">
        <div class="trade-info">
            <p v-if="!tradeEvaluated">Adicione Pokémons para avaliar a troca.</p>
            <p v-if="tradeEvaluated && fairTrade" class="info-sign info-sign--success">
                Essa troca é justa!
            </p>
            <p v-if="tradeEvaluated && !fairTrade" class="info-sign info-sign--fail">
                Essa troca não é justa!
            </p>
            <p v-if="tradeSaved" class="info-sign info-sign--success">
                Troca registrada com sucesso!
            </p>
            <p v-if="saveError" class="info-sign info-sign--fail">
                Houve um erro ao salvar a troca. Por favor, tente novamente.
            </p>
        </div>
        <div class="trade-controls">
            <button class="trade-control" @click="evaluateTrade">Avaliar</button>
            <button class="trade-control" @click="reset">Limpar</button>
            <button v-if="tradeEvaluated" @click="saveTrade" class="trade-control">Salvar</button>
        </div>
        <div class="trade-groups">
            <TradeGroup
                trainerInfo="Meus Pokémons"
                :pokemons="myPokemons.pokemons"
                @add="onAddPokemon(myPokemons, $event)"
                :error="myPokemons.error"
                :benefitted="myPokemons.wasBenefitted"/>
            <TradeGroup
                trainerInfo="Pokémons do Outro Treinador"
                :pokemons="otherPokemons.pokemons"
                @add="onAddPokemon(otherPokemons, $event)"
                :error="otherPokemons.error"
                :benefitted="otherPokemons.wasBenefitted"/>
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
            tradeEvaluated: false,
            fairTrade: null,
            tradeSaved: false,
            saveError: false,
            myPokemons: {
                pokemons: new Array(6).fill(null),
                error: '',
                wasBenefitted: false,
            },
            otherPokemons: {
                pokemons: new Array(6).fill(null),
                error: '',
                wasBenefitted: false,
            }
        }
    },
    methods: {
        onAddPokemon: function (group, data) {
            group.error = '';
            const emptySpot = group.pokemons.findIndex((spot) => {
                return spot === null;
            });
            if (emptySpot == -1) {
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
        },
        getExpSum(group) {
            console.log(group);
            return group
                .filter((pokemon) => pokemon != null)
                .map((pokemon) => pokemon.base_exp)
                .reduce((acc, cur) => acc + cur);
        },
        evaluateTrade() {
            axios.get(`${process.env.VUE_APP_POKETRADER_API_URL}/api/trades/fairness`, {
                params: {
                    'groupOneExp': this.getExpSum(this.myPokemons.pokemons),
                    'groupTwoExp': this.getExpSum(this.otherPokemons.pokemons),
                }
            }).then((response) => {
                this.tradeEvaluated = true;
                this.myPokemons.wasBenefitted = false;
                this.otherPokemons.wasBenefitted = false;
                this.tradeSaved = false;
                this.saveError = false;

                const data = response.data;
                if (!data.fair) {
                    this.fairTrade = false;
                    if (data.benefittedTrainer === "group_one") {
                        this.myPokemons.wasBenefitted = true;
                    } else {
                        this.otherPokemons.wasBenefitted = true;
                    }
                } else {
                    this.fairTrade = true;
                }
            }).catch((error) => {
                console.log(error.response);
            })
        },
        saveTrade() {
            const postData = {
                isFair: this.fairTrade,
                tradeGroups: [
                    {
                        wasBenefitted: this.myPokemons.wasBenefitted,
                        pokemons: this.myPokemons.pokemons.filter((pokemon) => pokemon !== null),
                    },
                    {
                        wasBenefitted: this.otherPokemons.wasBenefitted,
                        pokemons: this.otherPokemons.pokemons.filter((pokemon) => pokemon !== null),
                    }
                ]
            };
            console.log(postData)
            axios.post(`${process.env.VUE_APP_POKETRADER_API_URL}/api/trades`, postData)
            .then(() => {
                this.reset();
                this.tradeSaved = true;
            }).catch((error) => {
                console.log(error.response);
                this.saveError = true;
            })
        },
        reset() {
            this.myPokemons = {
                pokemons: new Array(6).fill(null),
                error: '',
                wasBenefitted: false,
            };
            this.otherPokemons = {
                pokemons: new Array(6).fill(null),
                error: '',
                wasBenefitted: false,
            }
            this.tradeEvaluated = false;
            this.fairTrade = null;
            this.tradeSaved = false;
            this.saveError = false;
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

    .trade-controls {
        display: flex;
        justify-content: center;
        padding-bottom: 1rem;
    }

    .trade-control {
        margin-right: 2rem;
        border: 4px solid #484860;
        min-width: 125px;
        font-size: 1rem;
        padding: .3rem .5rem;
        border-radius: 10px;
        font-family: 'JetBrains Mono', monospace;
        cursor: pointer;
    }

    .trade-control:hover {
        background-color: #7058B0;
        color: white;

    }

    .trade-groups {
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 850px) {
        .trade-groups {
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    .info-sign {
        padding: .3rem;
        border: 1px solid rgb(0, 0, 0, 0.4);
        color: white;
    }

    .info-sign--success {
        background-color: green;
    }

    .info-sign--fail {
        background-color: #e3242b;
    }
</style>
