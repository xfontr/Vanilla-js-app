import App, { AppTag } from "./components/App/App.js";
import { $ } from "./utils/selector/selector.js";

const root = $("#root");

new App();

root.innerHTML = `
  <${AppTag}>
    <slot></slot>
  </${AppTag}>      
`;
