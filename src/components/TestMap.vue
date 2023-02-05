<template>
  <div>
    <div id="map" v-on:touchstart="handleMap">맵영역</div>
    <div class="contents" v-on:touchstart="handleContents" v-on:touchmove="handleContentsMove" >컨텐츠 영역</div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {
    handleMap(){
      const mapEl = document.querySelector('#map')
      const contentsEl = document.querySelector('.contents')
      mapEl.style.height = '80vh'
      contentsEl.style.top = '80vh'
    },
    handleContents(event){
      console.log(event)
      // const mapEl = document.querySelector('#map')
      // const contentsEl = document.querySelector('.contents')
      // mapEl.style.height = '80vh'
      // contentsEl.style.top = '80vh'
    },
    handleContentsMove(event){
      console.log(event.touches[0].screenY)
      // const mapEl = document.querySelector('#map')
      // const contentsEl = document.querySelector('.contents')
      // mapEl.style.height = '80vh'
      // contentsEl.style.top = '80vh'
    }
  },
};

</script>
<style lang="scss" scoped>
#map {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 250px;
    background-color: #999999;
    transition: all 0.4s;
  }
  .contents {
    position: relative;
    min-height: 100vh;
    z-index: 1;
    top: 250px;
    background-color: #ffffff;
    transition: all 0.4s;
  }
</style>
