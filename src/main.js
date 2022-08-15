import { createApp } from 'vue';
import {createStore} from 'vuex'

import App from './App.vue';

const store = createStore({
  state(){
    return{
      counter:0
    }
  },
  mutations:{
    addOne(state,payload){
      state.counter  = state.counter + payload.value
    }
  },
  getters:{
    counter(state){
      return state.counter
    },
    normalizedCounter(_,getters){
      let finalCounter = getters.counter;
      if(finalCounter > 100){
        finalCounter = 100
      }
      return finalCounter
    }
  }
})

const app = createApp(App);

app.use(store)

app.mount('#app');
