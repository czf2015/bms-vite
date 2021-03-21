export const render = (tableColumns) => {
  console.log('render+++++')
  console.log(tableColumns)
  return tableColumns.map(({ label = '', field = label, width = '', children = [] }) => {
    // if (children.length > 0) {
    //   return `<el-table-column prop="${field}" label="${label}" width="${width}">${render(children)}</el-table-column>`
    // } else {
    //   return `<el-table-column prop="${field}" label="${label}" width="${width}" />`
    // }
    return `<el-table-column prop="${field}" label="${label}" width="${width}">${children.length > 0 ? render(children) : ''}</el-table-column>`
  }).join('')
}