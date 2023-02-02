<template>
  <div class="date-picker-wrap custom">
    <div class="week-wrap">
      <span v-for="(weekName, index) in weekNames" v-bind:key="index">
        {{ weekName }}</span
      >
    </div>
    <div
      class="date-wrap"
      v-for="(calendar, index) in currentCalendar"
      v-bind:key="index"
    >
      <p class="date-tit">{{ calendar.dateTitle }}</p>
      <ul class="picker-wrap">
        <li v-for="(el, index) in calendar.dateStart" :key="`blank${index}`" class="blank-date"></li>
        <li v-for="(el, index) in calendar.dateArr" :key="index">
          <button v-bind:disabled="!checkDate(el)" 
            v-on:click="onHandleRangeDate(el)" 
            v-bind:class="[rangeActiveDate(el) && 'data-active' , rangeSelectDate(el) && 'data-select' , rangePositionDate(el)]">
            <span>{{ el.getDate() }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekNames: ["일", "월", "화", "수", "목", "금", "토"],
      todayDate: new Date(),
      startDate: new Date("2023/1/12"),
      endDate: new Date("2023/03/11"),
      rangeDate : [],
      currentCalendar: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init: function () {
      this.initCalendar();
    },
    initCalendar: function () {
      const startDate = this.startDate; // 현재 날짜가 검사 시작 날짜를 넘지 못했을 경우 : 현재 날짜가 검사 시작 날짜를 넘었을경우
      const endDate = this.endDate; // 검사 마지막 날짜
      const diffDate = (endDate - startDate) / 1000; // 두 달의 차이 값
      const monthCount = Math.round(diffDate / (60 * 60 * 24 * 30)); // 남은 개월수
      const tempArr = new Array(monthCount + 1).fill({}); // 개월 수 만큼 배열 공간 만들기

      this.currentCalendar = tempArr.map((_, idx) => {
        const selectDate = new Date(
          startDate.getFullYear(),
          startDate.getMonth() + idx
        ); // 선택된 날짜의 연도와 달 구하기
        const dateTitle = `${selectDate.getFullYear()}년 ${
          selectDate.getMonth() + 1
        }월`; // 선택된 날짜의 연도와 달 구하기
        const dateArrFill = new Array(
          new Date(
            selectDate.getFullYear(),
            selectDate.getMonth() + 1,
            0
          ).getDate()
        ).fill(' '); // 선택된 달의 말일 구하기
        const dateArr = dateArrFill.map((_,idx) => {
          return new Date(
            selectDate.getFullYear(),
            selectDate.getMonth(),
            idx + 1
          ) // 일자별로 배열에 담기
        })
        const dateStart = selectDate.getDay(); // 달의 시작 날짜 알아오기;
        const tamp = {
          dateTitle,
          dateStart,
          dateArr,
        };
        return tamp;
      });
      console.log(this.currentCalendar);
    },
    isToday(year, month, day) {
      let date = new Date();
      return (
        year == date.getFullYear() &&
        month == date.getMonth() + 1 &&
        day == date.getDate()
      );
    },
    onHandleRangeDate(date){
      console.log(date , this.rangeDate[0] , date > this.rangeDate)
      if(date < this.rangeDate[0]){
        console.log('asss')
        this.rangeDate = [];
      }
      if(this.rangeDate.length >= 2){
        this.rangeDate = [];
      }
      const select = date;
      const selectArr = [...this.rangeDate ,select].sort((a , b) => a - b);
      this.rangeDate = [...selectArr];
      // console.log(this.rangeDate)
    },
    checkDate (date){
      const yseterDate = new Date().setDate(this.todayDate.getDate() - 1);
      return date >= this.startDate && date <= this.endDate && date.getDay() !== 0 && date >= yseterDate
    },
    rangeActiveDate(date) {
      return date >= this.rangeDate[0] && date <= this.rangeDate[1]
    },
    rangeSelectDate(date) {
      return this.rangeDate.includes(date)
    },
    rangePositionDate(date) {
      let className = '';
      if(date === this.rangeDate[0]){
        console.log(date)
        className = 'data-first';
      }else if(date === this.rangeDate[1]){
        console.log(date)
        className = 'data-last';
      }
      return className;
    }
  },
};
</script>
<style lang="scss" scoped>
.date-picker-wrap {
  display: block;
  .week-wrap {
    display: flex;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #ebeef0;
    span {
      width: 14.285%;
    }
  }
  .date-wrap {
    .date-tit {
      text-align: left;
    }

    .picker-wrap {
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 0;
        margin-bottom: 6px;
        list-style: none;
        width: 14.285%;
        button {
          position: relative;
          display: block;
          width: 100%;
          color : #4F5EC6;
          line-height: 46px;
          z-index: 1;
        }
        button:disabled {
          color: #999999;
        }
        button::after {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }
        button.data-active::after {
          content: "";
          background-color: #F1F2FA;
        }
        button.data-select {
          color: #ffffff;
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-color: #323479;
            border-radius: 100%;
          }
          &.data-first::after {
            left: 50%;
            width: 50%;
          }
          &.data-last::after {
            left: 0%;
            width: 50%;
          }
        }
        &.blank-date + li > button::after {
          border-radius: 20px 0 0 20px;
        }
        &:nth-child(7n - 6) > button::after {
          border-radius: 20px 0 0 20px;
        }
        &:nth-child(7n) > button::after {
          border-radius: 0 20px 20px 0;
        }
        &:last-child > button::after {
          border-radius: 0 20px 20px 0;
        }
      }
    }
  }
}
</style>
