<template>
  <el-radio-group ref="self" @change="handleChange" :value="select">
    <el-radio
      v-for="{ label, text = label, disabled = false } in options"
      :key="label"
      :label="label"
      :disabled="disabled"
      >{{ text }}</el-radio
    >
  </el-radio-group>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    select: {
      type: [String, Number],
    },
  },
  methods: {
    handleChange() {
      this.$emit("update:select", this.$refs.self.value);
    },
  },
};
</script>