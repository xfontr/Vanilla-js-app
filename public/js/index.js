import { components } from "./components/components.js";
import setCustomElements from "./utils/setCustomElements/setCustomElements.js";
import { $ } from "./utils/selector/selector.js";
const root = $("#root");
setCustomElements(components);
const { app, button, newslist, newscontextprovider, authors } = components;
root.innerHTML = `
  <${app.tag}>
      <${button.tag}>
        Hello
      </${button.tag}>
      <${newscontextprovider.tag}>
        <${newslist.tag}></${newslist.tag}>
        <${authors.tag}></${authors.tag}>
      </${newscontextprovider.tag}>
  </${app.tag}>
`;
