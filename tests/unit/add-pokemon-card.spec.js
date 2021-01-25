import { mount } from '@vue/test-utils';
import AddPokemonCard from '@/components/AddPokemonCard.vue';

describe('AddPokemonCard.vue', () => {
    it('binds input with data correctly', async () => {
        const wrapper = mount(AddPokemonCard);
        
        const input = wrapper.find('input');
        await input.setValue('pikachu');

        expect(input.element.value).toBe('pikachu');
    });

    it('emits event with input value', async () => {
        const wrapper = mount(AddPokemonCard);
        
        const input = wrapper.find('input');
        await input.setValue('pikachu');

        await wrapper.find('button').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('add');
    });

    it('display error message correctly', async () => {
        const wrapper = mount(AddPokemonCard, {
            propsData: { error: 'some error' }
        });
        
        expect(wrapper.text()).toMatch('some error');
    });
});
