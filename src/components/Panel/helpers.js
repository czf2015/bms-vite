export const convertToOptions = (raws) => {
  const ret = {}
  raws.forEach(({ field, defaultValue }) => {
    ret[field] = defaultValue
  })
  return ret
}