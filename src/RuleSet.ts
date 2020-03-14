import * as jsontoxml from 'jsontoxml'

export const compose = <R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) =>
  fns.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), fn1)

const regexEscape = (string: string) => string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
const allowUnsecureConnection = (url: string) => url.replace('https', 'https?')
const stripQueryStringAndHashFromPath = (url: string) => url.split("?")[0].split("#")[0]
const addRegexFlag = (regExpression: string) => `regex:^${regExpression}`

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