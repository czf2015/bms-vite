<template>
  <el-rate
    ref="self"
    :value="value"
    @change="handleChange"
    :icon-classes="iconClasses"
    void-icon-class="icon-rate-face-off"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
  >
  </el-rate>
</template>

<script>
export default {
  props: {
    value: {
      type: Number
    },
    iconClasses: {
      type: Array,
      default: () => ["icon-rate-face-1", "icon-rate-face-2", "icon-rate-face-3"]
    },
  },
  methods: {
    handleChange() {
      this.$emit('update:value', this.$refs.self.value)
    }
  },
};
</script>