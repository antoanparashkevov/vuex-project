<template>
  <base-container title="Vuex">
    <h3>{{counter}}</h3>
    <button @click='increase'>Increase</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed:{
    counter(){
      return this.$store.state.counter
    }
  },
  methods:{
    increase(){
      // this.$store.state.counter++
      this.$store.commit('addOne',{value:10})
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
