<template>
  <div class="section">
    <div id="map" v-on:touchstart="fnMap">맵영역</div>
    <div class="contents" v-on:touchstart="fnContentsTouch" v-on:touchmove="fnContentsTouchMove"
      v-on:touchend="fnContentsTouchEnd">
      <div>컨텐츠영역</div>
    </div>
  </div>
</template>

<script type="text/javascript" src="/js/common/map/tmap-routing.js"></script><!-- 화면 스크립트 실행 -->
<script>
import { debounce } from 'lodash'

export default {
  data() {
    return {
      deviceHeight: 0,
      touchStart: null,
      touchStep: 1,
    }
  },
  mounted() {
    this.deviceHeight = window.innerHeight;
    const bodyEl = document.querySelector('body');
    const htmlEl = document.querySelector('html');
    bodyEl.style.overflowY = 'hidden';
    htmlEl.style.overflowY = 'hidden';
    // this.initTmap();
  },
  methods: {
    // 페이지가 로딩이 된 후 호출하는 함수입니다.
    // initTmap(){
    //   // map 생성
    //   // Tmapv3.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
    //   const el = document.createElement('script');
    //   el.setAttribute('type', 'text/javascript');
    //   el.setAttribute('src', 'https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=17lwpsPmg51poJQE2BUcN40a8ubOu6ZM2w7jX7Sa');
    //   document.getElementsByTagName('head')[0].appendChild(el);
    //   // onload에 init 메소드 지정
    //   el.onload = function(){
    //     const map = new Tmapv2.Map("#map", { // 지도가 생성될 div
    //       center : new Tmapv2.LatLng(37.56520450, 126.98702028),
    //       width : "100%", // 지도의 넓이
    //       height : "400px", // 지도의 높이
    //       zoom : 17
    //     });
    //   };
    // }, 
    fnMap() {
      const mapEl = document.querySelector('#map');
      const contentsEl = document.querySelector('.contents');
      mapEl.style.height = `${((this.deviceHeight / 100) * 80) + 10}px`;
      contentsEl.style.top = `${((this.deviceHeight / 100) * 80)}px`;
      contentsEl.style.overflowY = `hidden`
      this.touchStep = 0;
    },
    fnMiddleContents() {
      const mapEl = document.querySelector('#map');
      const contentsEl = document.querySelector('.contents');
      mapEl.style.height = `${((this.deviceHeight / 100) * 31) + 10}px`;
      contentsEl.style.top = `${((this.deviceHeight / 100) * 31)}px`;
      contentsEl.style.overflowY = `hidden`
      this.touchStep = 1;
    },
    fnContents() {
      const contentsEl = document.querySelector('.contents');
      contentsEl.style.overflowY = `auto`
      contentsEl.style.top = `55px`;
      contentsEl.style.height = `${this.deviceHeight - 55}px`;
      this.touchStep = 2;
    },
    fnContentsTouch(event) {
      this.touchStart = event.touches[0].screenY;
    },
    fnContentsTouchMove: debounce((event) => {
      // console.log(event)
      // const touchEnd = event.touches[0].screenY;
      // const mapEl = document.querySelector('#map');
      // const contentsEl = document.querySelector('.contents');
      // const touchMove = touchEnd - this.touchStart;
      // const viewportHeight = this.touchStep === 1 ? 31 : this.touchStep === 2 && 80;
      // contentsEl.style.transform = `translateY(${touchMove}px)`
      // mapEl.style.height = `${((this.deviceHeight / 100) * viewportHeight) + touchMove}px`;
    }, 50),
    fnContentsTouchEnd: debounce(function (event) {
      const contentsEl = document.querySelector('.contents');
      const touchEnd = event.changedTouches[0].screenY;
      const touchMove = this.touchStart - touchEnd;
      if (touchMove === 0) return
      if (contentsEl.scrollTop > 0 ) return
      const touchDir = this.touchStart > touchEnd ? 'up' : 'down';
      console.log(touchMove , touchDir , this.touchStep);
      if (touchDir === 'down') {
        this.touchStep = this.touchStep > 0 ? this.touchStep - 1 : this.touchStep;
      }else {
        this.touchStep = this.touchStep < 2 ? this.touchStep + 1 : this.touchStep;
      }
    }, 50),
  },
  watch : {
    touchStep () {
      if (this.touchStep === 0){
        this.fnMap()
      } else if (this.touchStep === 1) {
        this.fnMiddleContents()
      } else if (this.touchStep === 2) {
        this.fnContents()
      }
    }
  }
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
  height: calc(31vh + 10px);
  min-height: 31vh;
  background-color: #999999;
  transition: all 0.4s;
}

.contents {
  position: fixed;
  z-index: 5;
  width: 100%;
  top: 31vh;
  background-color: #ffffff;
  transition: all 0.4s;
  overflow-y: hidden;

  >div {
    min-height: 100vh;
    background-color: #b1e2ff;
  }
}
</style>
