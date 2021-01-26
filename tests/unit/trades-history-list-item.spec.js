import { mount } from '@vue/test-utils';
import TradesHistoryListItem from '@/components/TradesHistoryListItem.vue';

describe('TradesHistoryListItem.vue', () => {
    it('emits event with trade id', async () => {
        const wrapper = mount(TradesHistoryListItem, {
            propsData: {
                trade: {
                    id: 1,
                    groups: [2,3],
                    isFair: true,
                }
            }
        });
        

        await wrapper.find('a').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('details');
        expect(wrapper.emitted().details[0]).toEqual([1]);
    });

    it('displays correct badge according to trade fairness', () => {
        let wrapper = mount(TradesHistoryListItem, {
            propsData: {
                trade: {
                    id: 1,
                    groups: [2,3],
                    isFair: true,
                }
            }
        });

        let badge =  wrapper.find('.badge');

        expect(badge.classes()).toContain('badge-fair');

        wrapper = mount(TradesHistoryListItem, {
            propsData: {
                trade: {
                    id: 1,
                    groups: [2,3],
                    isFair: false,
                }
            }
        });

        badge =  wrapper.find('.badge');
        expect(badge.classes()).toContain('badge-unfair');
    });
});
