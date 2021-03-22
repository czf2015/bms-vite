<template>
  <div class="panel">
    <CustomForm :items="items" :options="options" />
    <TableForm :datasource="datasource" :columns="columns" :operations="operations" />
  </div>
</template>


<script lang="ts">
import CustomForm from "../Form/index.vue";
import CustomTable from "../Table/index.vue";
import TableForm from "../TableForm/index.vue";
import adapter from "./adapter.js";
import { convertToOptions } from './helpers.js'
import { datasource, columns, operations } from '../../mock/table.js'

export default {
  name: "PanelView",
  components: { CustomForm, CustomTable, TableForm },
  props: {
    type: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      datasource,
      columns,
      operations
    }
  },
  computed: {
    items() {
      return adapter[this.type] ? adapter[this.type].items : [];
    },
    options() {
      if (typeof this.$parent.store[this.id] == 'undefined') {
        this.$parent.store[this.id] = convertToOptions(this.items)
      }
      return this.$parent.store[this.id]
    }
  },
};
</script>


<style scoped>
.panel {
  padding: 20px 40px;
  width: 475px;
  height: 812px;
  overflow-y: auto;
  background-color: #fff;
}
</style>