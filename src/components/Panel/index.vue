<template>
  <div class="panel">
    <CustomForm :formData="formData" />
    <CustomTable :data="tableData" :columns="tableColumns" />
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive } from "vue";
import CustomForm from '../Form/index.vue'
import { formProps } from '../../mock/form.js'
import { data, columns } from '../../mock/table.js'
import CustomTable from '../Table/index.vue'


export default defineComponent({
  name: "PanelView",
  components: { CustomForm, CustomTable },
  // props: {

  // },
  setup() {
    const formData = reactive(formProps)
    const tableData = reactive(data)
    const tableColumns = reactive(columns)
    return { formData, tableData, tableColumns }
  },
});
</script>


<style scoped>
.panel {
  padding: 20px 40px;
  width: 375px;
  height: 812px;
  overflow-y: auto;
  background-color: #fff;
}

</style>