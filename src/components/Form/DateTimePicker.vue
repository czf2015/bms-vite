
<template>
  <div class="block">
    <span class="demonstration">起始日期时刻为 12:00:00</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="defaultTime1"
    >
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration"
      >起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span
    >
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      align="right"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="defaultTime2"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)], // '12:00:00'
      defaultTime2: [
        new Date(2000, 1, 1, 12, 0, 0),
        new Date(2000, 2, 1, 8, 0, 0),
      ], // '12:00:00', '08:00:00'
    };
  },
};
</script>

<style>
</style>
