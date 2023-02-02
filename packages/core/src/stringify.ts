import type {
  CsvRow,
  CsvHeader,
} from '@csv-js/type'
import { CsvSymbol } from './config'
import { isUndefined } from './utils'

export function stringifyCsv (
  data: CsvRow[],
  header: CsvHeader[]
): string {
  let result = header.map(h => h.label || h.key).join(CsvSymbol.Col)
  result += CsvSymbol.Row
  const rows = data.map(dataVal => {
    const row = header.map(headerVal =>
      isUndefined(dataVal[headerVal.key]) ? '' : dataVal[headerVal.key]
    )
    return row.join(',')
  })
  result += rows.join(CsvSymbol.Row)
  return result
}
