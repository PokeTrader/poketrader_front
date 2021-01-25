<template>
    <li>
        <div class="list-item">
            <p>Troca #{{trade.id}}</p>
            <p>{{trade.groups[0]}}:{{trade.groups[1]}} Pokémons</p>
            <span class="badge" :class="trade.isFair ? 'badge-fair' : 'badge-unfair'">
                {{trade.isFair ? "Justa" : "Injusta"}}
            </span>
            <a href="#" @click="seeDetails">Ver detalhes</a>
        </div>
    </li>
</template>

<script>
export default {
    name: 'TradesHistoryListItem',
    props: ['trade'],
    methods: {
        seeDetails: function() {
            this.$emit('details', this.trade.id);
        }
    }
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

    li {
        border: 1px solid rgb(0,0,0,0.4);
    }

    .list-item {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .badge {
        padding:.5rem;
        color: white;
        border-radius: 10px;
        width: 80px;
    }

    .badge-fair {
        background-color: green;
    }

    .badge-unfair {
        background-color: red;
    }
</style>
