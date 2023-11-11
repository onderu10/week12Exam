import { renderNav, renderContent, renderFooter } from "./function.js";

const app = document.getElementById("app");

app.innerHTML = renderNav().outerHTML + renderContent().outerHTML + renderFooter().outerHTML;
