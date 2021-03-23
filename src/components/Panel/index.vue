<template>
  <div class="panel">
    <CustomFormWithTableForm :items="items" :options="options" />
  </div>
</template>


<script lang="ts">
import CustomFormWithTableForm from "../Form/CustomFormWithTableForm.vue";
import adapter from "./adapter.js";
import { convertToOptions } from "./helpers.js";

export default {
  name: "PanelView",
  components: { CustomFormWithTableForm },
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
  computed: {
    items() {
      return adapter[this.type] ? adapter[this.type].items : [];
    },
    options() {
      if (typeof this.$parent.store[this.id] == "undefined") {
        this.$parent.store[this.id] = convertToOptions(this.items);
      }
      return this.$parent.store[this.id];
    },
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