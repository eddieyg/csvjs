
export function downloadCsvFile (name: string, csvString: string) {
  const data = 'data:application/csv,' + encodeURIComponent(csvString)
  downloadFile(name + '.csv', data)
}

export function downloadFile (filename: string, data: string) {
  const aTag = document.createElement('a')
  aTag.setAttribute('download', filename)
  aTag.setAttribute('href', data)
  document.body.appendChild(aTag)
  aTag.click()
  document.body.removeChild(aTag)
}

export function removeDoubleQuotes (val: string): string {
  if (/^".*"$/.test(val)) {
    return val.replace(/(^"|"$)/g, '')
  } else {
    return val
  }
}

export function isUndefined (arg: any): boolean {
  return typeof arg === 'undefined'
}

export function isArray (arg: any): boolean {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(arg)
  } else {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
}
