import { mount } from '@vue/test-utils';
import TradeSimulation from '@/views/TradeSimulation.vue';
import AddPokemonCard from '@/components/AddPokemonCard.vue';
import flushPromises from 'flush-promises'
import PokemonSlot from '@/components/PokemonSlot.vue';
import axios from 'axios';

jest.mock('axios', () => {
    return {
        get: jest.fn(),
        defaults: {headers: {common: {}}}
    }
});

describe('TradeSimulation.vue', () => {
    it('correctly adds a pokemon to a trade group', async () => {
        axios.get.mockImplementation(() => Promise.resolve({
            data: {
                pokemon: {
                    name: 'gengar',
                    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
                    baseExp: 225,
                }
            }
        }));

        const wrapper = mount(TradeSimulation);

        const add = wrapper.findComponent(AddPokemonCard);
        
        const input = add.find('input');
        await input.setValue('gengar');

        add.find('button').trigger('click');

        await flushPromises();

        const slot = wrapper.findComponent(PokemonSlot);
        expect(slot.text()).toMatch('Gengar');
    })

    it('does not add pokemon if group is full', async () => {
        axios.get.mockImplementation(() => Promise.resolve({
            data: {
                pokemon: {
                    name: 'gengar',
                    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
                    baseExp: 225,
                }
            }
        }));

        const wrapper = mount(TradeSimulation);
        wrapper.vm.$data.myPokemons.pokemons = [
            {name: 'rattata'},
            {name: 'rattata'},
            {name: 'rattata'},
            {name: 'rattata'},
            {name: 'rattata'},
            {name: 'rattata'}
        ];

        const add = wrapper.findComponent(AddPokemonCard);
        
        const input = add.find('input');
        await input.setValue('gengar');

        add.find('button').trigger('click');

        await flushPromises();
        expect(add.text()).toMatch(wrapper.vm.$data.myPokemons.error);
    })
})