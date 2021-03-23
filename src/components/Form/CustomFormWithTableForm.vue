<template>
  <el-form
    :value="options"
    @change="handleChange"
    :rules="rules"
    ref="form"
    label-width="100px"
  >
    <el-form-item
      v-for="item in filter(items)"
      :key="item.field"
      :label="item.label"
      :prop="item.field"
    >
      <component
        :is="adapter[item.component]"
        v-model="options[item.field]"
        :type="item.type"
        :options="item.options"
        :columns="item.columns"
        :datasource="item.datasource"
        :operations="item.operations"
      />
    </el-form-item>
    <el-form-item v-if="!auto">
      <el-button type="primary" @click="submit">保存</el-button>
      <el-button @click="reset">取消</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
import { convertToRules, adapter, filter, components } from "./helpers.js";
import TableForm from '../TableForm/index.vue'

export default {
  name: "CustomFormWithTableForm",
  components: { ...components, TableForm },
  props: {
    items: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    auto: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const rules = convertToRules(this.items);
    return { rules, adapter };
  },
  methods: {
    handleChange() {
      this.$emit("update:options", this.$refs.form.value);
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit("save");
        } else {
          console.log("error save!!");
          return false;
        }
      });
    },
    reset() {
      this.$refs.form.resetFields();
      this.$emit("cancel");
    },
    filter(items) {
      return filter(items, this.options);
    },
  },
};
</script>


<style scoped></style>