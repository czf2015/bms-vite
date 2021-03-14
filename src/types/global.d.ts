type NUMBER_TYPE = {
    filed: string,
    label: string,
    value?: number,
    meta: {
        type: 'number',
        required: boolean,
        valid: boolean,
        message: string,
        min?: number,
        max?: number,
        step?: number,
        trigger?: string,
    }
}

type TEXT_TYPE = {
    filed: string,
    label: string,
    value?: string,
    meta: {
        type: 'text',
        required: boolean,
        valid: boolean,
        message: string,
        minLength?: number,
        maxLength?: number,
        trigger?: string,
    }
}

type TEXTAREA_TYPE = {
    filed: string,
    label: string,
    value?: string,
    meta: {
        type: 'textarea',
        required: boolean,
        valid: boolean,
        message: string,
        minLength?: number,
        maxLength?: number,
        trigger?: string,
    }
}

type IMAGE_TYPE = {
    filed: string,
    label: string,
    value?: string,
    meta: {
        type: 'image',
        required: boolean,
        valid: boolean,
        message: string,
        minSize?: number,
        maxSize?: number,
        trigger?: string,
    }
}

type LINK_TYPE = {
    filed: string,
    label: string,
    value?: string,
    meta: {
        type: 'link',
        required: boolean,
        valid: boolean,
        message: string,
        pattern: RegExp,
        trigger?: string,
    }
}

type DATE_TYPE = {
    filed: string,
    label: string,
    value?: Date,
    meta: {
        type: 'date',
        required: boolean,
        valid: boolean,
        message: string,
        startTime?: Date,
        endTime?: Date,
        trigger?: string,
    }
}

type DATETIME_TYPE = {
    filed: string,
    label: string,
    value?: Date,
    meta: {
        type: 'dateTime',
        required: boolean,
        valid: boolean,
        message: string,
        startTime?: Date,
        endTime?: Date,
        trigger?: string,
    }
}

type RADIO_TYPE = {
    filed: string,
    label: string,
    value?: any,
    meta: {
        type: 'radio',
        options: any[],
        required: boolean,
        valid: boolean,
        message: string,
    }
}

type CHECKBOX_TYPE = {
    filed: string,
    label: string,
    value?: any[],
    meta: {
        type: 'checkbox',
        options: any[],
        required: boolean,
        valid: boolean,
        message: string,
        least?: number,
        most?: number,
    }
}

type SELECT_TYPE = {
    filed: string,
    label: string,
    value?: any[] | any,
    meta: {
        type: 'select',
        options: any[],
        required: boolean,
        valid: boolean,
        message: string,
        least?: number,
        most?: number,
    }
}

type SWITCH_TYPE = {
    filed: string,
    label: string,
    value?: unknown,
    meta: {
        type: 'switch',
        options: unknown[],
        required: boolean,
        valid: boolean,
        message: string,
    }
}

type SLIDER_TYPE = {
    filed: string,
    label: string,
    value?: unknown,
    meta: {
        type: 'slider',
        options: unknown[],
        required: boolean,
        valid: boolean,
        message: string,
    }
}

type OPTION_TYPE = NUMBER_TYPE
    | TEXT_TYPE
    | TEXTAREA_TYPE
    | IMAGE_TYPE
    | LINK_TYPE
    | DATE_TYPE
    | DATETIME_TYPE
    | RADIO_TYPE
    | CHECKBOX_TYPE
    | SELECT_TYPE
    | SWITCH_TYPE
    | SLIDER_TYPE

// interface Store {
//     // 
// }

declare class Widget {
    title: string // 名称：富文本 | 商品 | 商品分类 | 图片广告 | 魔方 | 图文导航 | 文本 | 标题 | 优惠券 | 多人拼团 | 限时秒杀 | 限时折扣 | 优惠套装 | 满减满折 | N元M件 | 店铺信息 | 进入店铺 | 商品搜索 | 公告 | 辅助线 | 视频 | 辅助空白 | 购买公告 | 位置信息
    icon: string // 图标
    type: string // 类别：基础组件 | 营销组件 | 其它组件
    props: any // 组件属性
    render(props: any): Node // 渲染函数
}

declare class Page {
    title: string // 名称
    id: string // 标识
    category: string // 分类
    url: string // 路径
    modules: [{
        title: string, // 名称
        data: any, // 数据
        extra: OPTION_TYPE[]
    }]
    render(): Node
}

declare class Panel {
    title: string // 中文名称
    options: OPTION_TYPE[] // 配置选项
}