<template>
  <template
    v-for="{ field, label = field, width, children = [] } in columns"
    :key="field || label"
  >
    <el-table-column v-if="children.length > 0" :label="label">
      <TableColumns :columns="children" />
    </el-table-column>
    <el-table-column v-else :prop="field" :label="label" :width="width" />
  </template>
</template>


<script>
export default {
  name: "TableColumns",
  props: {
    columns: {
      type: Array,
      required: true,
    },
  },
};
</script>