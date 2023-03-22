<script type="text/javascript" src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=17lwpsPmg51poJQE2BUcN40a8ubOu6ZM2w7jX7Sa" />
<template>
  <div class="section">
    <div id="map">맵영역</div>
    <div class="contents">
      <div>
        <input type="file" accept="image/*" capture="camera"> 
      </div>
    </div>

    <div class="form">
    <form ref="reqForm" action="https://mobile.inicis.com/smart/payment" method="POST" accept-charset="euc-kr" target="_self">
      <input name="P_AMT" value="47800" />
      <input name="P_GOODS" value="20220328" />
      <input name="P_INI_PAYMENT" value="CARD" />
      <input name="P_MID" value="kotsavj001" />
      <input name="P_NEXT_URL" value="https://kbwallet-dev.kbstart.com:444/cib/rsv/returnUrl" />
      <input name="P_OID" value="2022121210001" />
      <input name="P_UNAME" value="테스트" />
      <input name="REQ_URL" value="https://mobile.inicis.com/smart/payment" />

      <button>Submit</button>
    </form>
  </div>
    
  </div>
</template>


<script>


export default {
  data() {
    return {
      deviceHeight: 0,
      touchStart: null,
      touchStep: 1,
    }
  },
  mounted() {
    this.initTmap();
  },
  methods: {
    // 페이지가 로딩이 된 후 호출하는 함수입니다.
    initTmap(){
      // map 생성
      // Tmapv3.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
      // onload에 init 메소드 지정
      // const reqData = {
      //   P_AMT: '47800',
      //   P_GOODS: '20220328',
      //   P_INI_PAYMENT: 'CARD',
      //   P_MID: 'kotsavj001',
      //   P_NEXT_URL: 'https://kbwallet-dev.kbstart.com:444/cib/rsv/returnUrl',
      //   P_OID: '2022121210001',
      //   P_UNAME: '테스트',
      //   REQ_URL: 'https://mobile.inicis.com/smart/payment',
      // }
      // const formData = new FormData();
      // Object.keys(reqData).map((item, index) => {
      //   formData.append(item, Object.values(reqData)[index])
      // })
      // fetch('https://mobile.inicis.com/smart/payment', {
      //   method: 'post',
      //   body: formData,
      // })
      // .then((res) => {
      //   console.log(res)
      // })
      // .catch((err) => {
      //   console.log(err)
      // })

      // this.$refs.reqForm.submit();


    }, 
  }
};

</script>
<style lang="scss" scoped>
.form {
  margin-top: 100px;
}
</style>
