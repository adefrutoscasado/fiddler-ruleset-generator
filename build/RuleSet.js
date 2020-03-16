"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsontoxml = require("jsontoxml");
exports.compose = (fn1, ...fns) => fns.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), fn1);
const regexEscape = (string) => string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
const allowUnsecureConnection = (url) => url.replace('https', 'https?');
const stripQueryStringAndHashFromPath = (url) => url.split("?")[0].split("#")[0];
const addRegexFlag = (regExpression) => `regex:^${regExpression}`;
// REVIEW: Executed in reverse?
const generateRegexFromUrl = exports.compose(addRegexFlag, allowUnsecureConnection, regexEscape, stripQueryStringAndHashFromPath);
class RuleSet {
    constructor() {
        this.rules = [];
        this.addRule = ({ match, action, enabled = true }) => {
            this.rules.push({
                match: generateRegexFromUrl(match),
                action,
                enabled
            });
        };
        this.getJSONRuleSet = () => ([{
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
            }]);
        this.getXMLRuleSet = () => {
            const XMLOptions = {
                xmlHeader: true
            };
            return jsontoxml(this.getJSONRuleSet(), XMLOptions);
        };
    }
}
exports.default = RuleSet;
//# sourceMappingURL=RuleSet.js.map