import { shallowMount } from '@vue/test-utils';
import PokemonSlot from '@/components/PokemonSlot.vue';

describe('PokemonSlot.vue', () => {
  it('renders pokemon name correctly', () => {
    const pokemon = {
        name: 'gengar',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
    };
    const wrapper = shallowMount(PokemonSlot, {
      propsData: { pokemon },
    });
    expect(wrapper.text()).toMatch("Gengar");
  });

  it('renders pokemon sprite correctly', () => {
    const pokemon = {
        name: 'gengar',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
    };
    const wrapper = shallowMount(PokemonSlot, {
      propsData: { pokemon },
    });
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toMatch(pokemon.sprite)
  });

  it('renders alt text without a sprite', () => {
    const pokemon = {
        name: 'gengar',
        sprite: null,
    };
    const wrapper = shallowMount(PokemonSlot, {
      propsData: { pokemon },
    });
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('alt')).toMatch(pokemon.name)
  });
});
