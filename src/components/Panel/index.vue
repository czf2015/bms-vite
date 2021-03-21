<template>
  <div class="panel">
    <CustomForm :formData="formData" />
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive } from "vue";
import CustomForm from '../Form/index.vue'
import formProps from '../../mock/formProps.js'


export default defineComponent({
  name: "PanelView",
  components: { CustomForm },
  // props: {

  // },
  setup() {
    const formData = reactive(formProps)
    return { formData }
  },
});
</script>


<style scoped>
.panel {
  padding: 20px 40px;
  width: 375px;
  height: 812px;
  background-color: #fff;
}

</style>