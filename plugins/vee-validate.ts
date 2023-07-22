import rules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";
import ja from "@vee-validate/i18n/dist/locale/ja.json";
import { defineRule, configure } from "vee-validate";

export default defineNuxtPlugin((n) => {
    configure({
        generateMessage: localize({
            en,
            ja,
        })
    });

    // Enable all validation rules
    for(const [rule, validator] of Object.entries(rules)) {
        defineRule(rule, validator);
    }

    setLocale("en");
});