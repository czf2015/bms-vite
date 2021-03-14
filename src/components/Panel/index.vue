<template>
  <div class="panel">
    <CustomForm />
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive } from "vue";
import CustomForm from '../Form/index.vue'


export default defineComponent({
  name: "PanelView",
  components: { CustomForm },
  setup() {
  },
});
</script>


<style scoped>
.panel {
  width: 375px;
  height: 812px;
  background-color: aquamarine;
}

</style>