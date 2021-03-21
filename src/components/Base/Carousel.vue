
<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item, idx) in list" :key="idx">
      <slot :item="item">
        <span class="medium">{{ idx }}</span>
      </slot>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    list: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: 'card'
    },
    height: {
      type: String,
      default: '200px'
    },
    interval: {
      type: Number,
      default: 4000
    },
  }
}
</script>

<style>
.el-carousel__item span {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
