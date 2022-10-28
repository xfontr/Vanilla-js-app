import components from "./components/components.js";
import setCustomElements from "./utils/newCustomElement.js";
import { $ } from "./utils/selector/selector.js";

const root = $("#root");

setCustomElements(components);

const { app, button } = components;

root.innerHTML = `
  <${app.tag}>
      <${button.tag}>
        adsfasdfasdf
      </${button.tag}>
  </${app.tag}>
`;
