import Tag from "../../types/Tag.js";
import { Components } from "../../types/components";

const newCustomElement = (
  tag: Tag,
  Component: CustomElementConstructor
): void => {
  if (!("customElements" in window)) return;

  customElements.define(tag.toLowerCase(), Component);
};

const setCustomElements = (components: Components): void => {
  Object.values(components).forEach(({ tag, Component }) =>
    newCustomElement(tag, Component)
  );
};

export default setCustomElements;
