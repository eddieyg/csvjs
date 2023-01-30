# CsvJs
A js library specialized in processing csv data.

## ✨ Features

- Parse csv format
- Serialized csv format
- Csv data CRUD
- Browser download csv

## 👨‍💻 Usage

### Install

```shell
npm install @csvjs/csv --save
```

### Example

```typescript

  const header = [
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'age',
    }
  ]
  const csv = new Csv(header, { name: 'test' })

  csv.append([
    {
      name: 'eddie',
      age: 20
    },
    {
      name: 'jojo',
      age: 18
    }
  ])

  csv.toString() // 'Name,age\r\neddie,20\r\njojo,18'

  // Browser download csv
  csv.download()

```

## 📦︎ Packages

- `@csvjs/csv` A class specialized in processing csv data.
- `@csvjs/core` The core module for processing csv.
- `@csvjs/type` Generic types for csvjs packsge.

## License

Licensed under the [MIT License](LICENSE).
