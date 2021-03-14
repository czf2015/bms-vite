
<template>
  <div style="margin-top: 15px">
    <el-input
      placeholder="请输入内容"
      v-model="inputValue"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="请选择">
          <el-option
            v-for="{ label, value = label, disabled = true } in options"
            :key="label"
            :label="label"
            :value="value"
            :disabled="disabled"
          ></el-option>
        </el-select>
      </template>
      <template #append>
        <el-button icon="el-icon-search"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      inputValue: ref(""),
      select: ref(""),
    };
  },
});
</script>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
