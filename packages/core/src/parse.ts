import type {
  CsvHeaderKeys,
  CsvRow,
  CsvHeader,
} from '@csv-js/type'
import { CsvSymbol, CsvRowSymbolRule } from './config'
import { removeDoubleQuotes } from './utils'

/**
 * parse csv string to data
 *   Supported new line char '\r\n' '\r' '\n'
 *   Not supported col contains char '\r' '\n' ','
 */
export function parseCsv (
  csvString: string,
  headerKeys: CsvHeaderKeys = []
): { data: CsvRow[], header: CsvHeader[]} {
  const data: CsvRow[] = []
  const header: CsvHeader[] = []
  const rows = csvString.split(CsvRowSymbolRule)
  const headerRow = rows.shift()?.split(CsvSymbol.Col) || []

  // parse header
  if (!headerKeys.length) {
    const colNum = headerRow?.length
    headerKeys = new Array(colNum).fill('').map((v, i) => `col${i}`)
  }
  headerRow.forEach((val, index) => {
    const keys = headerKeys as string[]
    header.push({
      key: keys[index],
      label: val
    })
  })

  // parse data
  rows.forEach(row => {
    const rowData: CsvRow = {}
    const cols = row.split(CsvSymbol.Col)
    cols.forEach((col, colIndex) => {
      const key = headerKeys[colIndex]
      rowData[key] = removeDoubleQuotes(col)
    })
    data.push(rowData)
  })

  return {
    data,
    header
  }
}
