<template>
  <div class="about">
    <TestMap/>
  </div>
</template>

<script>
// @ is an alias to /src
import TestMap from '@/components/TestMap.vue'

export default {
  name: 'AboutView',
  components: {
    TestMap
  }
}
</script>