

import { renderNav, renderContent, renderFooter } from "./functions.js";

const app = document.getElementById("app");


app.innerHTML = renderNav() + renderContent() + renderFooter();
