<template>
  <div class="container">
    <WidgetView />
    <PageView />
    <PanelView />
  </div>
</template>


<script lang="ts">
import { ref, defineComponent } from "vue";
import WidgetView from "./business/WidgetView.vue";
import PageView from "../../components/Page/index.vue";
import PanelView from "../../components/Panel/index.vue";

export default defineComponent({
  name: "DecoratePage",
  components: { WidgetView, PageView, PanelView },
  setup() {
    return {};
  },
});
</script>


<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    min-height: calc(100vh - 60px);
    background-color: #ccc;
}
</style>
