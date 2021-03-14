<template>
  <el-select v-model="select" :placeholder="placeholder">
    <el-option
      v-for="{ label, value = label, disabled = true } in options"
      :key="label"
      :label="label"
      :value="value"
      :disabled="disabled"
    ></el-option>
  </el-select>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {
      select: ref(""),
    };
  },
});
</script>