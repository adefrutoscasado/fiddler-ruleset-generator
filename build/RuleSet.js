"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsontoxml = require("jsontoxml");
const utils_1 = require("./utils");
// REVIEW: Executed in reverse?
const generateRegexFromUrl = utils_1.compose(utils_1.addRegexFlag, utils_1.allowUnsecureConnection, utils_1.regexEscape, utils_1.stripQueryStringAndHashFromPath);
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