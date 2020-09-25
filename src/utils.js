// Функция сортировки обькта по полю
export function sortByField(objectForSortingt, field) {
  return objectForSortingt.sort((a, b) => {
    if (typeof a[field] === 'string') {
      return a[field] < b[field] ? -1 : 1
    } else if (typeof a[field] == 'number') {
      return b[field] - a[field]
    } else {
      return false
    }
  })
}
