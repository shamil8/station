<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/images/2.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-for="(station, i) in STATIONS" :key="i">
      <h2>{{station.name}}</h2>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    ...mapActions([
       'GET_STATIONS_FROM_API'
    ]),
  },
  mounted() {
    this.GET_STATIONS_FROM_API()
    .then(res => {
      if (res.data)
        console.log("Data arrived!")
    })
  },
  computed: {
    ...mapGetters([
       'STATIONS'
    ]),
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 250px;
}
</style>
