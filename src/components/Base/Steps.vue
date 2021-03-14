
<template>
  <el-steps :active="active" finish-status="success">
    <el-step title="步骤 1" description="描述"></el-step>
    <el-step title="步骤 2" description="描述"></el-step>
    <el-step title="步骤 3" description="描述"></el-step>
  </el-steps>

  <el-button style="margin-top: 12px" @click="next">下一步</el-button>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
  },
};
</script>

<style>
</style>
