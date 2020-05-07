
import * as JSZip from 'jszip';

import RuleSet from './RuleSet'
import ResponseMock from './ResponseMock'
import { Arg1 } from 'tsargs'

const OUTPUT_RULESET_FILENAME: string = 'ruleset'
const MOCKS_PATH: string = 'C:/mocks/'

const defaultJsZipGenerationOptions: Arg1<typeof JSZip['generateAsync']> = {type: 'blob'}

const exportToZip = async (networkCapture: NetWorkReport, mocksPath = MOCKS_PATH, jsZipGenerationOptions = defaultJsZipGenerationOptions) => {
  let zip = new JSZip();
  const ruleSet = new RuleSet()
  await networkCapture.log.entries.forEach(async ({ response, request }) => {
    try {
      const responseMock = new ResponseMock(response, request)
      zip.file(`mocks/${responseMock.getFilename()}`, responseMock.getFiddlerMock())
      ruleSet.addRule({
        match: request.url,
        action: `${mocksPath}${responseMock.getFilename()}`
      })
    } catch (error) {
      console.error(`There was an error processing request ${request.url}\n`)
    }
  }) 
  zip.file(`${OUTPUT_RULESET_FILENAME}.farx`, ruleSet.getXMLRuleSet())
  return await zip.generateAsync(jsZipGenerationOptions)
}

export {RuleSet, ResponseMock}
export default exportToZip