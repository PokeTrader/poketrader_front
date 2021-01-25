<template>
    <div class="trade-container">
        <ul>
            <li>
                <div class="list-item">
                    <p>Troca #01</p>
                    <p>5:1 Pokémons</p>
                    <span class="badge badge-fair">Justa</span>
                    <a href="#">Ver detalhes</a>
                </div>
            </li>
            <li>
                <div class="list-item">
                    <p>Troca #01</p>
                    <p>5:1 Pokémons</p>
                    <span class="badge badge-unfair">Injusta</span>
                    <a href="#">Ver detalhes</a>
                </div>
            </li>
            <li>
                <div class="list-item">
                    <p>Troca #01</p>
                    <p>5:1 Pokémons</p>
                    <span class="badge badge-fair">Justa</span>
                    <a href="#">Ver detalhes</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

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
