<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TestPicker />
  </div>
</template>

<script>
// @ is an alias to /src
import TestPicker from '@/components/TestPicker.vue'

export default {
  name: 'HomeView',
  components: {
    TestPicker
  }
}
</script>
