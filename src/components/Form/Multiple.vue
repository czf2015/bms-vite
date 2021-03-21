<template>
  <el-checkbox-group
    ref="self"
    @change="handleChange"
    :value="select"
    :min="min"
    :max="max"
  >
    <el-checkbox
      v-for="{ label, text = label, disabled = false } in options"
      :key="label"
      :label="label"
      :disabled="disabled"
      >{{ text }}</el-checkbox
    >
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
  methods: {
    handleChange() {
      this.$emit("update:select", this.$refs.self.value);
    },
  },
};
</script>