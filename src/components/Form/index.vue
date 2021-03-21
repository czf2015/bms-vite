<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="form"
    label-width="100px"
  >
    <el-form-item
      v-for="item in filter(formData)"
      :key="item.field"
      :label="item.label"
      :prop="item.field"
    >
      <component
        :is="adapter[item.component]"
        v-model="ruleForm[item.field]"
        :type="item.type"
        :options="item.options"
      />
    </el-form-item>
     <el-form-item>
      <el-button type="primary" @click="submit"
        >立即创建</el-button
      >
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
import { convertToRuleForm, convertToRules, adapter, filter } from "./helpers.js";
import Single from "./Single.vue";
import Multiple from "./Multiple.vue";
import CustomSelect from "./Select.vue";
import CustomInput from "./Input.vue";
import DatePicker from "./DatePicker.vue";
import Rate from "./Rate.vue";
import AutoComplete from "./AutoComplete.vue";
import Slider from "./Slider.vue";
import Switch from "./Switch.vue";
import Upload from "./Upload.vue";

export default {
  name: "CustomForm",
  components: { Single, Multiple, CustomSelect, CustomInput, DatePicker, Rate, AutoComplete, Slider, Switch, Upload },
  props: {
    formData: {
      type: Array,
      required: true,
    },
  },
  data() {
    const rules = convertToRules(this.formData);
    const ruleForm = convertToRuleForm(this.formData);
    return { rules, ruleForm, adapter };
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    reset() {
      this.$refs.form.resetFields();
    },
    filter(formData) {
      return filter(formData, this.ruleForm)
    }
  },
};
</script>


<style scoped></style>