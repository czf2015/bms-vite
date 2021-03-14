<template>
  <h4 class="control" :class="{ open }" @click="open = !open">{{ title }}</h4>
  <div v-show="open">
    <slot></slot>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Collapse",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const open = ref(true);
    return { open };
  },
});
</script>


<style scoped>
.control {
  font-size: 14px;
  font-weight: normal;
  text-align: start;
  text-indent: 2em;
}
.control:before {
  content: "";
  display: inline-block;
  margin-right: 4px;
  width: 2px;
  height: 12px;
  background-color: #655eff;
}
.control:after {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: 9px 6px;
  background-position: 3px 3px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAABFklEQVQ4T2NkoBJgBJlj5eg5l+H//0QGBgYwnwTwn4GRcf6x/duTwRqtHTyf/2f4L0GCAXCljAyML44e2C4JNsjW2TPk7z+GlQz//zORZBgj4z9mJobww3u3r4F7xcrJM5Ph3/9pJBnExJh1bN/26SA9KGFi5eBRz8DA0ECkYQ3HDuxohKnFCFwrR6+pDP//ZeE1jJFp2rH927KR1WAY1NDQwLT74Inl//8zhGEzjJGRYZWrvUVkQ0PDP7wGgSRDQ0PZnr3+vPU/A4MLmuI9UqK83qtXr/6FbgnOdOMQGsrz+/WX/f8Z/ptAApPxDKsoj+OB1au/YHUpvrCw9fQU/fedYR1IDRMnQ9Dh7dtf41JPakrGaS8A5IpTDdpNGh0AAAAASUVORK5CYII=);
}
.open:after {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjhEMzczMDhDNjY5MTFFQUJDOUREOTBEN0YyNDE5RDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjhEMzczMDlDNjY5MTFFQUJDOUREOTBEN0YyNDE5RDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOEQzNzMwNkM2NjkxMUVBQkM5REQ5MEQ3RjI0MTlENyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOEQzNzMwN0M2NjkxMUVBQkM5REQ5MEQ3RjI0MTlENyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoFeL18AAADsSURBVHjaYvz//z8DNQALiGBkZMQqaevpKfrvO8M6EJuJkyHo8Pbtr7GpAzmGCZcNDqGhPEBDtv1n+G8DwiA2SAyXeqwGhYaGsv1+/Xk90AATuK1ANkgMJEeUQQ0NDUzP3nxeDAw5FwwvAMVAciA1BA3adfDUZKCXw3B5ASQHUoPXICsHj3qG//+yCEYRUA1YLRJgBIU4KNasnDwzGf79n0ZSnDMxZh3bt3062AwQYefiFfL3H8NKoLuZSDKIkfEfMxND+KE929aANf77yzCZZEMgAcYE1gsLo/+MDNsgkUKGURC9EK9RAwAEGAAfT2/HLvSKjwAAAABJRU5ErkJggg==);
}
</style>
