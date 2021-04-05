const path = require('path')
const fs = require('fs')
const beautify = require('json-beautify')

function split(arr, step = 1000) {
  const parts = []
  for (let start = 0; start < arr.length; start += step) {
    parts.push(arr.slice(start, start + step))
  }
  return parts
}

async function main() {
  try {
    const content = await fs.readFileSync(path.resolve(__dirname, '../full.json'))
    const jsonContent = JSON.parse(content)
    const step = 500
    const parts = split(jsonContent, step)
    for (let i = 0; i < parts.length; i += 1) {
      const part = parts[i]
      const startCount = i * step
      const endCount = startCount + step
      const fileName = `full.${startCount}-${endCount}.json`
      await fs.writeFileSync(path.resolve(__dirname, `../partial/${fileName}`), beautify(part, null, 2, 100))
    }
  } catch (err) {
    console.log(err)
  }
}

main()