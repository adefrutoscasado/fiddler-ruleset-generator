import * as jsontoxml from 'jsontoxml'

import {
  compose,
  addRegexFlag,
  allowUnsecureConnection,
  regexEscape,
  stripQueryStringAndHashFromPath
} from './utils'

// REVIEW: Executed in reverse?
const generateRegexFromUrl = compose(
  addRegexFlag,
  allowUnsecureConnection,
  regexEscape,
  stripQueryStringAndHashFromPath,
)

type Rule = {
  match: string // Regex, Exact...
  action: string // Route of json
  enabled?: boolean
}

class RuleSet {
  rules: Rule[] = []
  addRule = ({match, action, enabled = true}: Rule) => {
    this.rules.push({
      match: generateRegexFromUrl(match), 
      action, 
      enabled
    })
  }
  getJSONRuleSet = () => ([{
    name: "Autoresponder",
    attrs: {
      LastSave: new Date().toISOString(),
      FiddlerVersion: '',
    },
    children: [{
      name: "State",
      attrs: {
        Enabled: 'true',
        Fallthrough: 'true',
        UseLatency: 'false'
      },
      children: this.rules.map((rule) => ({
        name: "ResponseRule",
        attrs: {
          Match: rule.match,
          Action: rule.action,
          Enabled: rule.enabled,
        }
      }))
    }]
  }])
  getXMLRuleSet = () => {
    const XMLOptions = {
      xmlHeader: true
    }
    return jsontoxml(this.getJSONRuleSet(), XMLOptions)
  }
}


export default RuleSet