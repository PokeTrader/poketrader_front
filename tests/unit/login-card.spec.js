import { mount } from '@vue/test-utils';
import LoginCard from '@/components/LoginCard.vue';

describe('LoginCard.vue', () => {
    it('binds input with data correctly', async () => {
        const wrapper = mount(LoginCard);
        
        const username = wrapper.find('input#username');
        await username.setValue('someuser');

        const password = wrapper.find('input#password');
        await password.setValue('somepass');

        expect(username.element.value).toBe('someuser');
        expect(password.element.value).toBe('somepass');
    });

    it('emits register event with correct values', async () => {
        const wrapper = mount(LoginCard);
        
        const username = wrapper.find('input#username');
        await username.setValue('someuser');

        const password = wrapper.find('input#password');
        await password.setValue('somepass');

        await wrapper.find('#register-button').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('register');
        expect(wrapper.emitted().register[0]).toEqual([
            {username: 'someuser', password: 'somepass'}
        ]);
    });

    it('emits signin event with correct values', async () => {
        const wrapper = mount(LoginCard);
        
        const username = wrapper.find('input#username');
        await username.setValue('someuser');

        const password = wrapper.find('input#password');
        await password.setValue('somepass');

        await wrapper.find('#signin-button').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('signin');
        expect(wrapper.emitted().signin[0]).toEqual([
            {username: 'someuser', password: 'somepass'}
        ]);
    });
});
