<template>
  <div class="section">
    <div id="map" v-on:touchstart="fnMap">맵영역</div>
    <div class="contents"
      v-on:touchstart="fnContentsTouch" 
      v-on:touchmove="fnContentsTouchMove"
      v-on:touchend="fnContentsTouchEnd"
      >컨텐츠 영역</div>
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  data() {
    return {
      deviceHeight : 0,
      touchStart : null,
      touchStep : 1,
    }
  },
  mounted() {
    this.deviceHeight = window.innerHeight;
    const bodyEl = document.querySelector('body');
    const htmlEl = document.querySelector('html');
    bodyEl.style.overflowY = 'hidden';
    htmlEl.style.overflowY = 'hidden';
  },
  methods: {
    fnMap(){
      const mapEl = document.querySelector('#map');
      const contentsEl = document.querySelector('.contents');
      mapEl.style.height = `${((this.deviceHeight / 100) * 80)}px`;
      contentsEl.style.top = `${((this.deviceHeight / 100) * 80)}px`;
      contentsEl.style.transform = `translateY(0px)`
      this.touchStep = 0;
    },
    fnContents(){
      const mapEl = document.querySelector('#map');
      const contentsEl = document.querySelector('.contents');
      mapEl.style.height = `${((this.deviceHeight / 100) * 31)}px`;
      contentsEl.style.top = `${((this.deviceHeight / 100) * 31)}px`;
      contentsEl.style.transform = `translateY(0px)`
      this.touchStep = 1;
    },
    fnContentsTouch(event) {
      this.touchStart = event.touches[0].screenY;
    },
    fnContentsTouchMove : debounce((event) => {
      const touchEnd = event.touches[0].screenY;
      const mapEl = document.querySelector('#map');
      const contentsEl = document.querySelector('.contents');
      const touchMove = touchEnd - this.touchStart;
      const viewportHeight = this.touchStep === 1 ? 31 : this.touchStep === 2 && 80;
      contentsEl.style.transform = `translateY(${touchMove}px)`
      mapEl.style.height = `${((this.deviceHeight / 100) * viewportHeight) + touchMove}px`;
    }, 50),
    fnContentsTouchEnd: debounce(function (event) {
      const touchEnd = event.changedTouches[0].screenY;
      console.log(touchEnd)
      const touchMove = this.touchStart - touchEnd;
      const touchDir = this.touchStart > touchEnd ? 'up' : 'down';
      console.log(touchDir , touchMove)
      if (touchMove < 0) {
        this.fnMap()
      } else if (touchMove > 0) {
        this.fnContents()
      }
    } , 50),
  },
};

</script>
<style lang="scss" scoped>
.section {
  height: 100vh;
  overflow: hidden;
}
#map {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 31vh;
    min-height: 31vh;
    background-color: #999999;
    transition: all 0.4s;
  }
  .contents {
    position: relative;
    min-height: 100vh;
    z-index: 1;
    top: 31vh;
    background-color: #ffffff;
    transition: all 0.4s;
  }
</style>
