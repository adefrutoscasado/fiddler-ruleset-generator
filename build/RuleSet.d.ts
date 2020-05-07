export declare const compose: <R>(fn1: (a: R) => R, ...fns: ((a: R) => R)[]) => (a: R) => R;
declare type Rule = {
    match: string;
    action: string;
    enabled?: boolean;
};
declare class RuleSet {
    rules: Rule[];
    addRule: ({ match, action, enabled }: Rule) => void;
    getJSONRuleSet: () => {
        name: string;
        attrs: {
            LastSave: string;
            FiddlerVersion: string;
        };
        children: {
            name: string;
            attrs: {
                Enabled: string;
                Fallthrough: string;
                UseLatency: string;
            };
            children: {
                name: string;
                attrs: {
                    Match: string;
                    Action: string;
                    Enabled: boolean | undefined;
                };
            }[];
        }[];
    }[];
    getXMLRuleSet: () => string;
}
export default RuleSet;
