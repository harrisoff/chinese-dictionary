const path = require('path')
const fs = require('fs')

async function main() {
  try {
    const content = await fs.readFileSync(path.resolve(__dirname, '../full.json'))
    const jsonContent = JSON.parse(content)
    const words = jsonContent.map(({ word }) => word)
    await fs.writeFileSync(path.resolve(__dirname, `../words.json`), JSON.stringify(words))
  } catch (err) {
    console.log(err)
  }
}

main()