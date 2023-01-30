import type {
  csvHeaderKeys,
  CsvRow,
  CsvHeader,
} from '@csvjs/type'
import { removeDoubleQuotes } from './utils'

export function parseCsv (
  csvString: string,
  headerKeys: csvHeaderKeys = []
): { data: CsvRow[], header: CsvHeader[]} {
  const data: CsvRow[] = []
  const header: CsvHeader[] = []
  const rows = csvString.split('\r\n')
  const headerRow = rows.shift()?.split(',') || []

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
    const cols = row.split(',')
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