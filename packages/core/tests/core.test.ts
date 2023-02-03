import { describe, test, expect } from 'vitest'
import { parseCsv, stringifyCsv } from '../src/index'

describe('core', () => {
  const csvHeader = [
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'age',
      label: 'Age'
    }
  ]
  const csvData = [
    {
      name: 'eddie',
      age: '20'
    },
    {
      name: 'jojo',
      age: '18'
    }
  ]
  const csvString = 'Name,Age\r\neddie,20\r\njojo,18'
  const csvStringCR = 'Name,Age\reddie,20\njojo,18'
  
  test('parseCsv', async () => {
    const { header, data } = parseCsv(csvString, ['name', 'age'])
    expect(JSON.stringify(header)).toBe(JSON.stringify(csvHeader))
    expect(JSON.stringify(data)).toBe(JSON.stringify(csvData))
  })

  test('parseCsv row CR', async () => {
    const { header, data } = parseCsv(csvStringCR, ['name', 'age'])
    expect(JSON.stringify(header)).toBe(JSON.stringify(csvHeader))
    expect(JSON.stringify(data)).toBe(JSON.stringify(csvData))
  })

  test('stringifyCsv', async () => {
    const result = stringifyCsv(csvData, csvHeader)
    expect(result).toBe(csvString)
  })
})
