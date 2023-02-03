
export enum Character {
  CR = '\r',
  LF = '\n',
  CRLF = '\r\n'
}

export enum CsvSymbol {
  Col = ',',
  Row = '\r\n',
  ColWrap = '"',
}

export const CsvRowSymbolRule = /\r\n|\r|\n/
