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

declare class Panel {
    title: string // ????????????
    type: string
    options: OPTION_TYPE[] // ????????????
}

declare class Widget {
    title: string // ?????????????????? | ?????? | ???????????? | ???????????? | ?????? | ???????????? | ?????? | ?????? | ????????? | ???????????? | ???????????? | ???????????? | ???????????? | ???????????? | N???M??? | ???????????? | ???????????? | ???????????? | ?????? | ????????? | ?????? | ???????????? | ???????????? | ????????????
    icon: string // ??????
    type: string // ????????????????????? | ???????????? | ????????????
}

declare class Page {
    id: string // ??????
    title: string // ??????
    category: string // ??????
    url: string // ??????
    modules: [{
        id: string,
        type: string,
        title: string, // ??????
        data: any, // ??????
        extra: OPTION_TYPE[]
    }]
}

