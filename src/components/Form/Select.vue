<template>
  <el-select
    :value="select"
    @change="handleChange"
    :placeholder="placeholder"
  >
    <el-option
      v-for="{ label, value = label, disabled = false } in options"
      :key="label"
      :label="label"
      :value="value"
      :disabled="disabled"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    select: {
      type: [String, Number],
    },
  },
  methods: {
    handleChange() {
      this.$emit("update:select", this.value);
    },
  },
};
</script>