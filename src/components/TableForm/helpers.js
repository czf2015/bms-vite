export const extract = (formData) => {
    const data = {};
    formData.forEach(({ field, value }) => {
        data[field] = value;
    });
    return data;
};

export const convertToFormItems = (columns) => {
    const ret = []
    columns.forEach((column) => {
        if (column.children && column.children.length > 0) {
            ret.push(...convertToFormItems(column.children))
        } else {
            ret.push({ ...column, children: undefined })
        }
    })
    return ret
}
