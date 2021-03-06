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

export const components = {
  Single,
  Multiple,
  CustomSelect,
  CustomInput,
  DatePicker,
  Rate,
  AutoComplete,
  Slider,
  Switch,
  Upload,
}

export const convertToRules = (raws) => {
  const ret = {}
  raws.forEach(({ field, rules }) => {
    ret[field] = rules
  })
  return ret
}

export const adapter = {
  input: 'CustomInput',
  select: 'CustomSelect',
  textarea: 'CustomTextarea',
  single: 'Single',
  multiple: 'Multiple',
  date: 'DatePicker',
  rate: 'Rate',
  autocomplete: 'AutoComplete',
  slide: 'Slider',
  switch: 'Switch',
  upload: 'Upload',
  tableForm: 'TableForm',
}

const compareValue = (v1, v2) => {
  if (Array.isArray(v1)) {
    return v2.every(item => v1.includes(item))
  } else {
    return v1 == v2
  }
}

const judgePrerequiste = (prerequisite, ruleForm) => {
  const { field, options, range } = prerequisite
  const v1 = ruleForm[field]
  if (options) {
    return (!options.include || options.include.every(v2 => compareValue(v1, v2)))
      && (!options.exclude || !options.exclude.some(v2 => compareValue(v1, v2)))
      && (!options.all || options.all.some(v2 => (!Array.isArray(v1) || v1.length == v2.length) && compareValue(v1, v2)))
  }
  if (range) {
    // 
  }
  return true
}

export const filter = (formData, ruleForm) => {
  return formData.filter(item => {
    let ret = true
    if (item.prerequisites) {
      ret = item.prerequisites.every(prerequisite => judgePrerequiste(prerequisite, ruleForm))
    }
    return ret
  })
}