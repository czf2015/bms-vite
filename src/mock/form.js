import { columns, datasource, operations } from './table.js'

export const items = [
  {
    component: 'input',
    type: 'text',
    field: 'name',
    label: '输入框',
    defaultValue: '',
    rules: [
      { required: true, message: "请输入活动名称", trigger: "blur" },
      { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
    ],
  },
  {
    component: 'select',
    field: 'region1',
    label: '选择列表',
    defaultValue: '',
    options: [
      { label: '区域一', value: 'shanghai' },
      { label: '区域二', value: 'beijing' },
    ],
    rules: [
      { required: true, message: "请选择活动区域", trigger: "change" },
    ],
  },
  {
    component: 'single',
    field: 'region2',
    label: '单选按钮',
    defaultValue: '',
    options: [
      { label: '区域一', value: 'shanghai' },
      { label: '区域二', value: 'beijing' },
    ],
    rules: [
      { required: true, message: "请选择活动区域", trigger: "change" },
    ],
  },
  {
    component: 'multiple',
    field: 'region3',
    label: '多选按钮',
    defaultValue: [],
    options: [
      { label: '区域一', value: 'shanghai' },
      { label: '区域二', value: 'beijing' },
    ],
    rules: [
      { required: true, message: "请选择活动区域", trigger: "change" },
    ],
  },
  {
    component: 'date',
    field: 'date',
    label: '日历',
    defaultValue: '',
    rules: [
      { type: "date", required: true, message: "请选择时间", trigger: "change" },
    ],
  },
  {
    component: 'input',
    type: 'textarea',
    field: 'desc',
    label: '文本框',
    defaultValue: '',
    rules: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
    prerequisites: [{
      field: 'region1',
      options: {
        include: [
          'shanghai'
        ],
        exclude: [
          'beijing'
        ],
        all: [
          'shanghai'
        ]
      },
      // range: {

      // }
    }]
  },
  // {
  //   component: 'rate',
  //   field: 'rate',
  //   label: '评分',
  //   value: 0,
  //   // rules: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
  // },
  {
    component: 'autocomplete',
    field: 'auto',
    label: '远程搜索',
    defaultValue: '',
    // rules: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
  },
  {
    component: 'slider',
    field: 'slider',
    label: '滑块',
    defaultValue: 0,
    // rules: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
  },
  {
    component: 'switch',
    field: 'switch',
    label: '开关',
    defaultValue: false,
    // rules: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
  },
  {
    component: 'upload',
    field: 'upload',
    label: '文件上传',
    defaultValue: '',
    // rules: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
  },
  {
    component: 'tableForm',
    columns,
    operations,
    datasource,
    field: 'banners',
    label: '轮播图',
    defaultValue: [],
    // rules: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
  },
]
