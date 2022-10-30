import { components } from "./components/components.js";
import setCustomElements from "./utils/setCustomElements/setCustomElements.js";
import { $ } from "./utils/selector/selector.js";

const root = $("#root");

setCustomElements(components);

const { app, newslist, authors } = components;

root.innerHTML = `
  <${app.tag}>
        <${newslist.tag}></${newslist.tag}>
        <${authors.tag}></${authors.tag}>
  </${app.tag}>
`;
