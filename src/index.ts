
import * as JSZip from 'jszip';

import RuleSet from './RuleSet'
import ResponseMock from './ResponseMock'
import { Arg1 } from 'tsargs'

const OUTPUT_RULESET_FILENAME: string = 'ruleset'
const MOCKS_PATH: string = 'C:/mocks/'

const defaultJsZipGenerationOptions: Arg1<typeof JSZip['generateAsync']> = {type: 'blob'}

interface ExportOptions {
  mocksPath?: string,
  useJsonOnSuccess?: boolean,
  onErrorProcessingRequest?: (errorMessage: string) => void,
}

const exportToZip = async (
  networkCapture: NetWorkReport, 
  jsZipGenerationOptions = defaultJsZipGenerationOptions, 
  {
    mocksPath = MOCKS_PATH,
    useJsonOnSuccess = true,
    onErrorProcessingRequest = console.error,
  }: ExportOptions,
) => {
  let zip = new JSZip();
  const ruleSet = new RuleSet()
  await networkCapture.log.entries.forEach(async ({ response, request }) => {
    try {
      const responseMock = new ResponseMock(response, request, {useJsonOnSuccess})
      zip.file(`mocks/${responseMock.getFilename()}`, responseMock.getFiddlerMock())
      ruleSet.addRule({
        match: request.url,
        action: `${mocksPath}${responseMock.getFilename()}`
      })
    } catch (error) {
      onErrorProcessingRequest(`There was an error processing request ${request.url}\n${error}\n`)
    }
  }) 
  zip.file(`${OUTPUT_RULESET_FILENAME}.farx`, ruleSet.getXMLRuleSet())
  return await zip.generateAsync(jsZipGenerationOptions)
}

export {RuleSet, ResponseMock}
export default exportToZip