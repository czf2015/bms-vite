<template>
  <div class="page">
    <header>xxx页面</header>
    <main @dragover="allowDrop($event)" @drop="drop($event)">
      <section
        v-for="{ type, id } in list"
        :key="id"
        @dragstart="setOriginId($event, id)"
        @dragenter="setTargetId($event, id)"
        @dragover="allowDrop($event)"
        draggable="true"
        :data-id="id"
      >
        <component
          :is="adapter[type].component"
          v-bind="{ ...adapter[type].props, id }"
        />
      </section>
      <Carousel />
    </main>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, watchEffect } from "vue";
import Banner from "./partial/Banner.vue";
import Carousel from '../../components/Base/Carousel.vue'
import adapter from "./adapter";
import { swap } from "../../utils/Array.js";
let targetId

export default defineComponent({
  name: "PageView",
  components: { Banner, Carousel },
  setup() {
    const list = reactive([]);
    const allowDrop = (e) => {
      e.preventDefault();
    };
    const drop = (e) => {
      console.log("+++drop+++");
      e.preventDefault();
      const type = e.dataTransfer.getData("type");
      const originId = e.dataTransfer.getData("originId");
      // const targetId = e.dataTransfer.getData("targetId");
      console.log({ type, originId, targetId });
      if (originId) {
        if (targetId) {
          swap(list, originId, targetId);
        } else {
          const index = list.findIndex((item) => item.id == originId);
          const lastIndex = list.length - 1;
          const tmp = list[index];
          list[index] = list[lastIndex];
          list[lastIndex] = tmp;
        }
      } else {
        const id =
          list.length > 0
            ? `${Math.max(...list.map((item) => Number(item.id))) + 1}`
            : "1";
        if (targetId) {
          const index = list.findIndex((item) => item.id == targetId);
          list.splice(index, 0, { id, type });
        } else {
          list.push({ id, type });
        }
      }
      // 清理targetId值
      targetId = undefined
      console.log("---drop---");
    };
    const setOriginId = (e, originId) => {
      console.log("+++setOriginId+++");
      e.dataTransfer.setData("originId", originId);
      console.log(e.dataTransfer.getData("originId"));
      console.log("---setOriginId---");
    };
    const setTargetId = (e, target_id) => {
      console.log("+++setTargetId+++");
      targetId = target_id
      // if (e.currentTarget) {
      //   e.dataTransfer.setData("targetId", targetId);
      //   console.log(e.dataTransfer.getData("targetId"));
      //   console.log(e.currentTarget)
      // }
      console.log("---setTargetId---");
    };
    return { adapter, list, allowDrop, drop, setTargetId, setOriginId };
  },
});
</script>


<style scoped>
.page {
  width: 375px;
  height: 812px;
  background-color: #fff;
}

main {
  min-height: 95%;
}
</style>