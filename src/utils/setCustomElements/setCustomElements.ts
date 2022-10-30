import Tag from "../../types/Tag.js";
import { Components, Pages } from "../../types/components.js";

export const newCustomElement = (
  tag: Tag,
  Component: CustomElementConstructor
): void => {
  if (!("customElements" in window)) return;

  customElements.define(tag.toLowerCase(), Component);
};

/**
 * Defines all the documents in the app
 * @param components
 */

const setCustomElements = (components: Components | Pages): void => {
  Object.values(components).forEach(({ tag, Component }) =>
    newCustomElement(tag, Component)
  );
};

export default setCustomElements;
