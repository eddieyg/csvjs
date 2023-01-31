import type {
  CsvRow,
  CsvHeader,
} from '@csv-js/type'
import { isUndefined } from './utils'

export function stringifyCsv (
  data: CsvRow[],
  header: CsvHeader[]
): string {
  let result = header.map(h => h.label || h.key).join(',')
  result += '\r\n'
  const rows = data.map(dataVal => {
    const row = header.map(headerVal =>
      isUndefined(dataVal[headerVal.key]) ? '' : dataVal[headerVal.key]
    )
    return row.join(',')
  })
  result += rows.join('\r\n')
  return result
}
