
import { promisify } from 'util';
import * as fs from 'fs';
import RuleSet from './RuleSet'
import ResponseMock from './ResponseMock'

import * as networkCaptureImport from './target/networkcapture.json';
const networkCapture = networkCaptureImport as NetWorkReport
const writeFile = promisify(fs.writeFile);

const OUTPUT_FOLDER: string = './generated/'
const OUTPUT_RULESET_FILENAME: string = 'ruleset'
const MOCKS_PATH: string = 'C:/mocks/'

const main = async () => {
  const ruleSet = new RuleSet()
  await networkCapture.log.entries.forEach(async ({ response, request }) => {
    try {
      const responseMock = new ResponseMock(response, request)
      await writeFile(`${OUTPUT_FOLDER}mocks/${responseMock.getFilename()}`, responseMock.getFiddlerMock())
      ruleSet.addRule({
        match: request.url,
        action: `${MOCKS_PATH}${responseMock.getFilename()}`
      })
    } catch (error) {
      console.error(`There was an error processing request ${request.url}\n`)
    }
  })
  await writeFile(`${OUTPUT_FOLDER}${OUTPUT_RULESET_FILENAME}.farx`, ruleSet.getXMLRuleSet())
  console.log('Process finished')
}

main()