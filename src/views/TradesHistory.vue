<template>
    <div v-if="!detailMode" class="trade-container">
        <p v-if="trades.length === 0">Você não possui trocas salvas.</p>

        <ul >
            <TradesHistoryListItem
                v-for="trade in trades"
                :key="trade.id"
                :trade="trade"
                @details="onSeeDetail"/>
        </ul>
    </div>
    <TradesHistoryDetail v-else :trade="detailTrade" @goBack="backToList"/>
</template>

<script>
import axios from 'axios';
import TradesHistoryListItem from '@/components/TradesHistoryListItem.vue'
import TradesHistoryDetail from '@/components/TradesHistoryDetail.vue'

export default {
    components: {
        TradesHistoryListItem,
        TradesHistoryDetail
    },
    data: function() {
        return {
            trades: [],
            detailMode: false,
            detailTrade: null,
        }
    },
    created: function() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('user-token')}`;
        axios.get(`${process.env.VUE_APP_POKETRADER_API_URL}/api/trades`)
        .then((response) => {
            this.trades = response.data.trades;
        })
    },

    methods: {
        onSeeDetail: function(id) {
            axios.get(`${process.env.VUE_APP_POKETRADER_API_URL}/api/trades/${id}`)
            .then((response) => {
                console.log(response);
                this.detailTrade = response.data.trade;
                this.detailMode = true;
            })
        },
        backToList: function() {
            this.detailMode = false;
        }
    }
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

    .trade-container {
        display: flex;
        margin: auto;
        width: 60%;
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

    ul {
        list-style-type: none;
        height: 600px;
        overflow: hidden;
        overflow-y: scroll;
    }

    li {
        border: 1px solid rgb(0,0,0,0.4);
    }
</style>
