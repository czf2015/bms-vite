<template>
  <div class="container">
    <WidgetView ref="widget" />
    <PageView ref="page" @configure="configure" />
    <PanelView ref="panel" :type="type" :id="id" />
  </div>
</template>


<script lang="ts">
import WidgetView from "./business/WidgetView.vue";
import PageView from "../../components/Page/index.vue";
import PanelView from "../../components/Panel/index.vue";


export default {
  name: "DecoratePage",
  components: { WidgetView, PageView, PanelView },
  data() {
    return {
      type: '',
      id: '',
      store: {},
    }
  },
  methods: {
    configure({ type, id }) {
      console.log({ type, id })
      this.type = type
      this.id = id
    }
  },
};
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
