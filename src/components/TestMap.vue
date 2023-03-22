<script type="text/javascript" src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=17lwpsPmg51poJQE2BUcN40a8ubOu6ZM2w7jX7Sa" />
<template>
  <div class="section">
    <div id="map">맵영역</div>
    <div class="contents">
      <div>
        <p>{{ change }}</p>
        <input type="file" accept="image/*" capture="camera"> 
      </div>
    </div>
    
  </div>
</template>


<script lang="ts">


export default {
  data() {
    return {
      deviceHeight: 0,
      touchStart: null,
      touchStep: 1,
      name : '01092087621',
      change : '',
    }
  },
  mounted() {
    this.initTmap();
    this.getUserLocation();
  },
  methods: {
    // 페이지가 로딩이 된 후 호출하는 함수입니다.
    initTmap(){
      // map 생성
      // Tmapv3.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
      // onload에 init 메소드 지정

      console.log(window.Tmapv2);
        const map = new window.Tmapv2.Map(document.getElementById("map"), { // 지도가 생성될 div
          center : new Tmapv2.LatLng(37.56520450, 126.98702028),
          width : "100%", // 지도의 넓이
          height: '100%',
          zoom : 17
        });
        var marker = new Tmapv2.Marker({
          title: '자동차 검사소 입니다',
          label: '자동차검사소',
          position: new Tmapv2.LatLng(37.56520450, 126.98702028), //Marker의 중심좌표 설정.
          map: map //Marker가 표시될 Map 설정..
          
      });
      const tmapSize = new Tmapv2.Size(10,2000);
  }, 
  success({ coords, timestamp }) {
      alert(coords.latitude , coords.longitude)
      const latitude = coords.latitude;   // 위도
      const longitude = coords.longitude; // 경도
      
      alert(`위도: ${latitude}, 경도: ${longitude}, 위치 반환 시간: ${timestamp}`);
  },
  getUserLocation() {
      if (!navigator.geolocation) {
          throw "위치 정보가 지원되지 않습니다.";
      }
      navigator.geolocation.getCurrentPosition(this.success);
  }

        
  //   fnMap() {
  //     const mapEl = document.querySelector('#map');
  //     const contentsEl = document.querySelector('.contents');
  //     mapEl.style.height = `${((this.deviceHeight / 100) * 80) + 10}px`;
  //     contentsEl.scrollTo(0 , 0)
  //     contentsEl.style.top = `${((this.deviceHeight / 100) * 80)}px`;
  //     contentsEl.style.overflowY = `hidden`
  //     this.touchStep = 0;
  //   },
  //   fnMiddleContents() {
  //     const mapEl = document.querySelector('#map');
  //     const contentsEl = document.querySelector('.contents');
  //     mapEl.style.height = `${((this.deviceHeight / 100) * 31) + 10}px`;
  //     contentsEl.style.top = `${((this.deviceHeight / 100) * 31)}px`;
  //     contentsEl.style.overflowY = `hidden`
  //     this.touchStep = 1;
  //   },
  //   fnContents() {
  //     const contentsEl = document.querySelector('.contents');
  //     contentsEl.style.overflowY = `auto`
  //     contentsEl.style.top = `55px`;
  //     contentsEl.style.height = `${this.deviceHeight - 55}px`;
  //     this.touchStep = 2;
  //   },
  //   fnContentsTouch(event) {
  //     this.touchStart = event.touches[0].screenY;
  //   },
  //   fnContentsTouchMove (event) {
  //     // console.log(event)
  //     const mapEl = document.querySelector('#map');
  //     const contentsEl = document.querySelector('.contents');
  //     const touchEnd = event.touches[0].screenY;
  //     const touchMove = touchEnd - this.touchStart;
  //     if ((this.touchStep === 2 && touchMove < 0) || (this.touchStep === 0 && touchMove > 0)) return
  //     if (contentsEl.scrollTop > 0) return
  //     const viewportHeight = this.touchStep === 1 ? 31 : this.touchStep === 2 && 80;
  //     mapEl.style.height = `${((this.deviceHeight / 100) * viewportHeight) + touchMove}px`;
  //     contentsEl.style.transform = `translateY(${touchMove}px)`
  //   },
  //   fnContentsTouchEnd (event) {
  //     const contentsEl = document.querySelector('.contents');
  //     const touchEnd = event.changedTouches[0].screenY;
  //     const touchMove = this.touchStart - touchEnd;
  //     if (touchMove === 0) return
  //     if (contentsEl.scrollTop > 0 ) return
  //     const touchDir = this.touchStart > touchEnd ? 'up' : 'down';
  //     contentsEl.style.transform = `translateY(0)`
  //     if (touchDir === 'down') {
  //       this.touchStep = this.touchStep > 0 ? this.touchStep - 1 : this.touchStep;
  //     }else {
  //       this.touchStep = this.touchStep < 2 ? this.touchStep + 1 : this.touchStep;
  //     }
  //   },
  // },
  // watch : {
  //   touchStep () {
  //     if (this.touchStep === 0){
  //       const contentsEl = document.querySelector('.contents');
  //       contentsEl.style.overflowY = `hidden`
  //       this.fnMap()
  //     } else if (this.touchStep === 1) {
  //       const contentsEl = document.querySelector('.contents');
  //       contentsEl.style.overflowY = `hidden`
  //       this.fnMiddleContents()
  //     } else if (this.touchStep === 2) {
  //       this.fnContents()
  //     }
  //   }
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
}

.contents {
  position: fixed;
  z-index: 5;
  width: 100%;
  left: 0;
  top: 31vh;
  background-color: #ffffff;
  overflow-y: hidden;
  > div {
    min-height: 100vh;
    background-color: #b1e2ff;
  }
}
</style>
