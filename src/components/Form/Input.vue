
<template>
  <el-input
    :type="type"
    v-model="inputValue"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :show-word-limit="showWordLimit"
    :autosize="autosize"
    :prefix-icon="prefixIcon"
    :suffix-icon="suffixIcon"
  >
    <template #prepend>
      <slot name="prepend"></slot>
    </template>
    <template #append>
      <slot name="append"></slot>
    </template>
  </el-input>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
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
  },
  setup() {
    return {
      inputValue: ref(""),
    };
  },
});
</script>

<style>
.demo-input-label {
  display: inline-block;
  width: 130px;
}
</style>
