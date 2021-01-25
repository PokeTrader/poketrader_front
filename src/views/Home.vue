<template>
  <div class="home">
    <TradeSimulation/>
  </div>
</template>

<script>
// @ is an alias to /src
// import LoginCard from '@/components/LoginCard.vue';
import TradeSimulation from '@/components/TradeSimulation.vue';

export default {
  name: 'Home',
  components: {
    TradeSimulation,
  },
};
</script>
