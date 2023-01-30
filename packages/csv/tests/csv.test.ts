import { describe, test, expect } from 'vitest'
import Csv from '../src/index'

describe('Csv', () => {
  const header = [
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'age',
      label: 'Age'
    }
  ]
  const data = [
    {
      name: 'eddie',
      age: 20
    },
    {
      name: 'jojo',
      age: 18
    }
  ]
  const csvString = 'Name,Age\r\neddie,20\r\njojo,18'

  test('toString', async () => {
    const csv = new Csv(header, { name: 'test-toString' })
    csv.append(data)
    expect(csv.toString()).toBe(csvString)
  })

  test('import', async () => {
    const csv = Csv.import(csvString, ['name', 'age'])
    expect(csv.toString()).toBe(csvString)
  })
})
