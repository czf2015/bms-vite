
<template>
  <el-slider v-model="value" :format-tooltip="formatTooltip"></el-slider>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
  },
};
</script>

<style>
</style>
