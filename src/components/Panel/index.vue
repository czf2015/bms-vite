<template>
  <div class="panel">
    <CustomForm :items="items" :options="options" />
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive } from "vue";
import { convertToRules } from "../Form/helpers";
import CustomForm from "../Form/index.vue";
import CustomTable from "../Table/index.vue";
import adapter from "./adapter.js";
import { convertToOptions } from './helpers.js'

export default defineComponent({
  name: "PanelView",
  components: { CustomForm, CustomTable },
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
      if (typeof this.$parent.store[this.id] == 'undefined') {
        this.$parent.store[this.id] = convertToOptions(this.items)
      }
      return this.$parent.store[this.id]
    }
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