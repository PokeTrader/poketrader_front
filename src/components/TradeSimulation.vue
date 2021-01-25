<template>
    <div class="trade-container">
        <p>Adicione Pokémons para a troca.</p>
        <div class="trade-groups">
            <div class="trade-group">
                <AddPokemonCard/>
                <div class="poke-slots">
                    <PokemonSlot :pokemon="{
                        name: 'Ditto',
                        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    }"/>
                    <PokemonSlot/>
                    <PokemonSlot/>
                    <PokemonSlot/>
                    <PokemonSlot/>
                    <PokemonSlot/>
                </div>
            </div>
            <div class="trade-group">
                <AddPokemonCard/>
                <div class="poke-slots">
                    <PokemonSlot :pokemon="{
                        name: 'Squirtle',
                        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
                    }"/>
                    <PokemonSlot/>
                    <PokemonSlot/>
                    <PokemonSlot/>
                    <PokemonSlot/>
                    <PokemonSlot/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddPokemonCard from '@/components/AddPokemonCard.vue';
import PokemonSlot from '@/components/PokemonSlot.vue';

export default {
    name: 'TradeSimulation',
    components: {
        AddPokemonCard,
        PokemonSlot
    }
};
</script>


        PokemonSlot<style scoped>
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

    .poke-slots {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
</style>
