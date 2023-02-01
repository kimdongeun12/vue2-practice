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
      <table>
        <tbody>
          <tr v-for="(row, index) in calendar.dateArr" :key="index">
            <!-- <td
              v-for="(day, index2) in row"
              :key="index2"
              style="padding: 20px"
            >
              <span
                v-if="isToday(currentYear, currentMonth, day)"
                class="rounded"
              >
                {{ day }}
              </span>
              <span v-else>
                {{ day }}
              </span>
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekNames: ["일", "월", "화", "수", "목", "금", "토"],
      startDate: "2023/2/12",
      endDate: "2023/04/11",
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
      const newDate = new Date(); // 현재 날짜 구하기
      const checkDate = new Date(this.startDate); // 검사 시작 날짜
      const startDate = checkDate - newDate > 0 ? checkDate : newDate; // 현재 날짜가 검사 시작 날짜를 넘지 못했을 경우 : 현재 날짜가 검사 시작 날짜를 넘었을경우
      const endDate = new Date(this.endDate); // 검사 마지막 날짜
      const diffDate = (endDate - startDate) / 1000; // 두 달의 차이 값
      const monthCount = Math.round(diffDate / (60 * 60 * 24 * 30)); // 남은 개월수
      const tempArr = new Array(monthCount + 1).fill({}); // 개월 수 만큼 배열 공간 만들기

      this.currentCalendar = tempArr.map((el, idx) => {
        const selectDate = new Date(
          startDate.getFullYear(),
          startDate.getMonth() + idx
        ); // 선택된 날짜의 연도와 달 구하기
        const dateTitle = `${selectDate.getFullYear()}년 ${
          selectDate.getMonth() + 1
        }월`; // 선택된 날짜의 연도와 달 구하기
        const dateArr = new Array(
          new Date(
            selectDate.getFullYear(),
            selectDate.getMonth() + 1,
            0
          ).getDate()
        ); // 선택된 달의 말일 구하기
        const tamp = {
          ...el,
          dateTitle,
          dateArr,
        };
        return tamp;
      });
      console.log(this.currentCalendar);
    },
    isToday: function (year, month, day) {
      let date = new Date();
      return (
        year == date.getFullYear() &&
        month == date.getMonth() + 1 &&
        day == date.getDate()
      );
    },
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

    table {
      width: 100%;
    }
  }
}
</style>
