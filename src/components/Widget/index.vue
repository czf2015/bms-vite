<template>
  <figure @dragstart="onDragstart($event)" draggable="true">
    <img :src="icon" class="icon" />
    <figcaption>{{ title }}</figcaption>
  </figure>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Widget",
  props: {
    type: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const onDragstart = (e) => {
      e.dataTransfer.setData("type", props.type);
    };
    return { onDragstart };
  },
});
</script>


<style scoped>
figure {
  margin-top: 20px;
  width: 87px;
}

.icon {
  width: 40px;
  height: 40px;
}

figcaption {
  word-wrap: break-word;
  font-weight: 400;
}
</style>