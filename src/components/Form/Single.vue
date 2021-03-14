<template>
  <el-radio-group v-model="radio">
    <el-radio 
      v-for="{ label, text = label, disabled = true } in options" 
      :key="label" 
      :label="label"
      :disabled="disabled"
    >{{text}}</el-radio>
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
      type: String | Number,
    }
  },
  data() {
    return {
      radio: this.select,
    };
  },
  watch: {
    radio(val) {
      this.$emit('change', val)
    }
  }
};
</script>