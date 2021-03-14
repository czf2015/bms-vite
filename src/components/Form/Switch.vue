
<template>
  <el-switch
    style="display: block"
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="按月付费"
    inactive-text="按年付费"
  >
  </el-switch>
</template>

<script>
export default {
  data() {
    return {
      value: true,
    };
  },
};
</script>

<style>
</style>
