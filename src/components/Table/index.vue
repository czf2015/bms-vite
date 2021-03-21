
<template>
  <el-table
    :data="data"
    :tree-props="{ children: 'children' }"
    style="width: 100%"
  >
    <TableColumns :columns="columns" />
  </el-table>
</template>


<script>
import TableColumns from "./Columns.vue";

export default {
  name: "CustomTable",
  components: { TableColumns },
  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>
