<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <TestPicker />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import TestPicker from "./components/TestPicker.vue";

@Component({
  components: {
    HelloWorld,
    TestPicker,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul,
li {
  padding: 0;
  margin: 0;
}
button {
  background-color: transparent;
  border: 0 none;
}
</style>
