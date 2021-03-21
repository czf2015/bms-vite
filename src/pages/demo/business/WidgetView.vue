<template>
  <WidgetClassifyList :list="list" />
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import WidgetClassifyList from "../../../components/Widget/ClassifyList.vue";
import mock from "../../../mock/widget.js";

export default defineComponent({
  name: "WidgetView",
  components: { WidgetClassifyList },
  setup() {
    const list = ref(mock);
    return { list };
  },
});
</script>