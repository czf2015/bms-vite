
<template>
  <el-input
    :type="type"
    ref="self"
    @change="handleChange"
    :value="value"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :show-word-limit="showWordLimit"
    :autosize="autosize"
    :prefix-icon="prefixIcon"
    :suffix-icon="suffixIcon"
    size="small"
  >
    <!-- <template #prepend>
      <slot name="prepend"></slot>
    </template>
    <template #append>
      <slot name="append"></slot>
    </template> -->
  </el-input>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    prefixIcon: {
      type: String,
    },
    suffixIcon: {
      type: String,
    },
    maxlength: {
      type: Number,
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    autosize: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
    },
  },
  methods: {
    handleChange() {
      this.$emit("update:value", this.$refs.self.value);
    },
  },
};
</script>

<style>
.demo-input-label {
  display: inline-block;
  width: 130px;
}
</style>
