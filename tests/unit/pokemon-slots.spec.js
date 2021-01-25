import { mount } from '@vue/test-utils';
import PokemonSlots from '@/components/PokemonSlots.vue';
import PokemonSlot from '@/components/PokemonSlot.vue';

describe('PokemonSlots.vue', () => {
    it('renders a list of pokémon correctly', () => {
        const pokemons = [
            {
                name: 'gengar',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
            },
            {
                name: 'gengar',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
            },
            {
                name: 'gengar',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
            },
        ];
        const wrapper = mount(PokemonSlots, {
            propsData: { pokemons: pokemons }
        });
        const slots = wrapper.findAllComponents(PokemonSlot);
        expect(slots).toHaveLength(3);
    });

    it('renders both filled and empty slots correctly', () => {
        const pokemons = [
            {
                name: 'gengar',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
            },
            null
        ];
        const wrapper = mount(PokemonSlots, {
            propsData: { pokemons: pokemons }
        });
        const slots = wrapper.findAllComponents(PokemonSlot);
        expect(slots).toHaveLength(2);
    });
});
