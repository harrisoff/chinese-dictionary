const path = require('path')
const fs = require('fs')
const beautify = require('json-beautify')

async function main() {
  try {
    const content = await fs.readFileSync(path.resolve(__dirname, '../full.json'))
    const jsonContent = JSON.parse(content)
    const newJson = jsonContent.map(({ html, detail, url, ...rest }) => {
      return rest
    })
    await fs.writeFileSync(path.resolve(__dirname, `../slim.json`), beautify(newJson, null, 2, 20))
  } catch (err) {
    console.log(err)
  }
}

main()