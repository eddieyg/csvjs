import type {
  CsvHeader,
  CsvRow,
  CsvOptions,
  csvHeaderKeys,
} from '@csv-js/type'
import { downloadCsvFile, isArray, parseCsv, stringifyCsv } from '@csv-js/core'

export default class Csv {
  readonly header: CsvHeader[]
  readonly data: CsvRow[] = []
  readonly info = {
    name: `csvjs-${+new Date()}`
  }

  constructor (header: CsvHeader[], options?: CsvOptions) {
    this.header = header
    if (options && options.name) {
      this.info.name = options.name
    }
  }

  append (row: CsvRow | CsvRow[]) {
    const rows = (isArray(row) ? row : [row]) as CsvRow[]
    this.data.push(...rows)
  }

  prepend (row: CsvRow | CsvRow[]) {
    const rows = (isArray(row) ? row : [row]) as CsvRow[]
    this.data.unshift(...rows)
  }

  insert (index: number, row: CsvRow | CsvRow[]) {
    const rows = (isArray(row) ? row : [row]) as CsvRow[]
    this.data.splice(index, 0, ...rows)
  }

  remove (index: number) {
    this.data.splice(index, 1)
  }

  cover (index: number, row: CsvRow) {
    this.data[index] = row
  }

  findIndexes (key: string, value: any) {
    const result: number[] = []
    this.data.forEach((val, index) => {
      if (val[key] === value) result.push(index)
    })
    return result
  }

  toString (): string {
    return stringifyCsv(
      this.data,
      this.header
    )
  }

  toHeaderKeys (): csvHeaderKeys {
    return this.header.map(v => v.key)
  }

  download (name = '') {
    downloadCsvFile(
      name || this.info.name,
      this.toString()
    )
  }

  static import (csvString: string, headerKeys?: csvHeaderKeys, options?: CsvOptions) {
    const { data, header } = parseCsv(csvString, headerKeys)
    const instance = new this(header, options)
    instance.append(data)
    return instance
  }
}
