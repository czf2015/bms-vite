<template>
  <ul>
    <li v-for="(item, idx) in list" :key="idx">{{ getItemInfo(item) + id}}</li>
  </ul>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Banner",
  props: {
    list: {
      type: Array,
      required: true,
    },
    id: String
  },
  setup() {
      const getItemInfo = (item) => typeof item == 'string' ? item : JSON.stringify(item)
      return { getItemInfo }
  }
});
</script>


<style scoped>
</style>