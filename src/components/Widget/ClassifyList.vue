<template>
  <ul class="widget-classify-list">
    <li v-for="{ category, items } in list" :key="category" class="category">
      <Collapse :title="category">
        <ul class="container">
          <li v-for="item in items" :key="item.type">
            <Widget v-bind="item" />
          </li>
        </ul>
      </Collapse>
    </li>
  </ul>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Widget from "./index.vue";
import Collapse from "../Base/Collapse.vue";

export default defineComponent({
  name: "WidgetClassifyList",
  components: { Widget, Collapse },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
});
</script>


<style scoped>
.widget-classify-list {
  width: 240px;
  height: 812px;
  background-color: #fff;
}

.category {
  margin-top: 40px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>