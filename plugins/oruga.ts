import oruga from "@oruga-ui/oruga-next";
import {bulmaConfig} from "@oruga-ui/theme-bulma";

import "@fortawesome/fontawesome-free/css/all.min.css";

export default defineNuxtPlugin(n => {
    n.vueApp.use(oruga, bulmaConfig);
});
