export const data = [
  {
    date: "2016-05-03",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
  },
  {
    date: "2016-05-02",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
  },
  {
    date: "2016-05-08",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
  },
  {
    date: "2016-05-06",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
  },
  {
    date: "2016-05-07",
    name: "王小虎",
    province: "上海",
    city: "普陀区",
    address: "上海市普陀区金沙江路 1518 弄",
    zip: 200333,
  },
]


export const columns = [
  { field: "date", label: "日期", width: 150 },
  {
    label: "配送信息",
    children: [
      { field: "name", label: "姓名", width: 120 },
      {
        label: "地址",
        children: [
          { field: "province", label: "省份", width: 120 },
          { field: "city", label: "市区", width: 120 },
          { field: "address", label: "地址", width: 300 },
          { field: "zip", label: "邮编", width: 120 },
        ],
      },
    ],
  },
]