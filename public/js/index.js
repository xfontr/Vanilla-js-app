import { components, pages } from "./components/components.js";
import setCustomElements from "./utils/setCustomElements/setCustomElements.js";
import { $ } from "./utils/selector/selector.js";
const root = $("#root");
setCustomElements(components);
setCustomElements(pages);
const { app } = components;
const { newspage } = pages;
root.innerHTML = `
  <${app.tag}>
      <${newspage.tag}></${newspage.tag}>
  </${app.tag}>
`;
