export const convertToOptions = (raws) => {
  const ret = {}
  raws.forEach(({ field, defaultValue, datasource, value }) => {
    ret[field] = datasource || value || defaultValue
  })
  return ret
}