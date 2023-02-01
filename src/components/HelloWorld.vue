<template>
<div class="date-picker-wrap">
  <v-date-picker
    v-model="dates"
    range
    locale="kr"
    width="308"
    :no-title="true"
    :show-current="false"
    :allowed-dates="disablePastDates"
    min="2023-02-12"
    max="2023-04-11"
  ></v-date-picker>
  <v-date-picker
    v-model="dates"
    range
    :no-title="true"
    width="308"
    :allowed-dates="disablePastDates"
    min="2023-02-12"
    max="2023-04-11"
  ></v-date-picker>

</div>
</template>

      <script>
  export default {
    data: () => ({
      dates: ['' , ''],
    }),
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
    methods: {
      disablePastDates(val) {
        const newDate = new Date()
        const prevDate = newDate.toISOString().substr(0, 10);
        // const date = new Date(val).getDay();
        return val >= prevDate
      },
    }
  }
</script>
<style lang="scss" scoped>
  .date-picker-wrap:deep {
    .v-date-picker-table table{
      border-spacing: 0 4px;
    }
     .v-date-picker-table .v-btn.v-btn--active {
      color: red;
    }
    .v-date-picker-table--date .v-btn{
      display: block;
      width: 100%;
      height: auto;
      padding-top: 25%;
      padding-bottom: 25%;
    }
    .v-btn:before{
      border-radius: 0;
    }
    .v-date-picker-table tr {
      border-radius: 20px;
    }
    .v-date-picker--last-in-range:before{
      border-radius: 0 20px 20px 0;
    }
    .v-date-picker--first-in-range:before{
      border-radius: 20px 0 0 20px;
    }

  }
</style>