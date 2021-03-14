<template>
  <el-checkbox-group v-model="checked" :min="min" :max="max">
    <el-checkbox
      v-for="{ label, text = label, disabled = true } in options"
      :key="label"
      :label="label"
      :disabled="disabled"
    >{{ text }}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    select: {
      type: Array,
    },
  },
  data() {
    return {
      checked: this.select,
    };
  },
  watch: {
    checks(val) {
      this.$emit("change", val);
    },
  },
};
</script>