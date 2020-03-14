
import { promisify } from 'util';
import * as fs from 'fs';
import * as mime from 'mime-to-extensions'
import RuleSet from './RuleSet'

import * as networkCaptureImport from './target/networkcapture.json';
const networkCapture = networkCaptureImport as NetWorkReport
const writeFile = promisify(fs.writeFile);

const OUTPUT_FOLDER: string = './generated/'
const MOCKS_PATH: string = 'C:/mocks/'

const removeSymbols = (string: string) => string.replace(/[^a-zA-Z ]/g, "")

const main = async () => {
  const ruleSet = new RuleSet()
  await networkCapture.log.entries.forEach(async ({ request, response }) => {
    if (response.content.mimeType === 'application/json') {
      const mockFileName = `${removeSymbols(request.url)}.${mime.extension(response.content.mimeType)}`
      ruleSet.addRule({
        match: request.url,
        action: `${MOCKS_PATH}${mockFileName}`
      })
      await writeFile(`${OUTPUT_FOLDER}mocks/${mockFileName}`, JSON.stringify(JSON.parse(response.content.text)))
    }
  })
  await writeFile(`${OUTPUT_FOLDER}ruleset.farx`, ruleSet.getXMLRuleSet())
  console.log('Process finished')
}

main()