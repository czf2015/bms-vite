
<template>
  <el-time-picker
    is-range
    v-model="value"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围"
  />
</template>

<script>
export default {
  data() {
    return {
      value: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
    };
  },
};
</script>

<style>
</style>
