import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import Login from '@/views/Login.vue';
import TradeSimulation from '@/views/TradeSimulation.vue';

describe('App.vue', () => {
    it('displays only login component without a token stored', async () => {
        const wrapper = mount(App);
        const loginComponent = wrapper.findComponent(Login);
        const tradeSimulationComponent = wrapper.findComponent(TradeSimulation);
        expect(loginComponent.exists()).toBe(true);
        expect(tradeSimulationComponent.exists()).toBe(false);
    })

    it('displays simulation component when a token is stored', async () => {
        global.window.localStorage = {
            store: {},
            setItem: (key, value) => store.key = value,
            getItem: (key) => store.key,
        }

        localStorage.setItem('user-token', 'some-token');

        const wrapper = mount(App);
        const loginComponent = wrapper.findComponent(Login);
        const tradeSimulationComponent = wrapper.findComponent(TradeSimulation);
        expect(loginComponent.exists()).toBe(false);
        expect(tradeSimulationComponent.exists()).toBe(true);
    })
})