export const columns = [
    {
        field: 'date',
        label: '日期',
        defaultValue: new Date(),
        rules: [
            { type: "date", required: true, message: "请选择时间", trigger: "change" },
        ],
        component: 'date',
        // width: 100,
        fixed: true,
    },
    {
        label: '配送信息',
        children: [
            {
                field: 'name',
                label: '姓名',
                defaultValue: '',
                component: 'input',
                type: 'text',
                // width: 120
            },
            {
                field: 'province',
                label: '省份',
                defaultValue: '',
                component: 'input',
                type: 'text',
                // width: 120
            },
            {
                field: 'city',
                label: '市区',
                defaultValue: '',
                component: 'input',
                type: 'text',
                // width: 120
            },
            {
                field: 'address',
                label: '地址',
                defaultValue: '',
                component: 'input',
                type: 'text',
                // width: 120
            },
            {
                field: 'zip',
                label: '编码',
                defaultValue: '',
                component: 'input',
                type: 'text',
                // width: 120
            },
        ]
    },
]

export const datasource = [{
    date: '2016-05-03',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333,
}, {
    date: '2016-05-02',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
}, {
    date: '2016-05-04',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
}, {
    date: '2016-05-01',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
}, {
    date: '2016-05-08',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
}, {
    date: '2016-05-06',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
}, {
    date: '2016-05-07',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
}]


export const operations = [
    {
        field: 'edit',
        label: '编辑'
    },
    {
        field: 'del',
        label: '删除'
    },
    {
        field: 'up',
        label: '上移'
    },
    {
        field: 'down',
        label: '下移'
    },
]
