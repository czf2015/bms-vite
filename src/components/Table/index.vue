<template>
  <el-table
    class="table"
    :data="datasource"
    :tree-props="{ children: 'children' }"
    :stripe="strip"
    :border="border"
  >
    <el-table-column type="index" :index="1" label="子项" :fixed="true" />
    <TableColumns :columns="columns" />
    <el-table-column fixed="right" label="操作" width="240">
      <template #default="scope">
        <el-button
          v-for="operation in operations"
          :key="operation.field"
          @click="operate(operation, scope.$index)"
          :type="operation.field == 'del' ? 'danger' : operation.field == 'edit' ? 'primary' : 'text'"
          size="mini"
          :disabled="isDisabled(operation.field, scope.$index)"
        >{{operation.label}}</el-button>
      </template>
    </el-table-column>
    <template #append>
      <div class="append-row" @click="append">+</div>
    </template>
  </el-table>
</template>


<script>
import TableColumns from "./Columns.vue";

export default {
  name: "CustomTable",

  components: {
    TableColumns,
  },

  props: {
    datasource: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    operations: {
      type: Array,
    },
    strip: {
      type: Boolean,
    },
    border: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    operate(operation, index) {
      this.$emit(operation.field, index);
    },
    append() {
      this.$emit("append");
    },
    isDisabled(field, index) {
      return (field == 'up' && index == 0) || (field == 'down' && index == this.datasource.length - 1)
    }
  },
};
</script>


<style scoped>
.table {
  width: 100%;
}
.append-row {
  font-weight: lighter;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #409eff;
  border: 1px dashed #ebeef5;
}
</style>