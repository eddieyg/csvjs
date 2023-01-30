
export interface CsvHeader {
  key: string
  label?: string
}
export type CsvRow = Record<string, any>

export type csvHeaderKeys = Array<string>

export interface CsvOptions {
  name?: string
}
