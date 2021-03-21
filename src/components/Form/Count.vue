<template>
  <el-input-number
    ref="self"
    @change="handleChange"
    :value="value"
    :precision="precision"
    :step="step"
    :max="max"
    :size="size"
  />
</template>


<script>
export default {
  props: {
    value: {
      type: Number
    },
    precision: {
      type: Number,
      default: 2
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  methods: {
    handleChange() {
      this.$emit("update:value", this.$refs.self.value);
    },
  },
};
</script>