
<template>
  <el-date-picker
    type="date"
    ref="self"
    @change="handleChange"
    :value="value"
    placeholder="选择日期"
  >
  </el-date-picker>
</template>

<script>
export default {
  props: {
    value: String,
  },
  methods: {
    handleChange() {
      this.$emit("update:value", this.$refs.self.value);
    },
  },
};
</script>

<style>
</style>
