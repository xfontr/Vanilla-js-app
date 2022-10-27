type Tag = `${string}-${string}`;

const newCustomElement = (
  tag: Tag,
  Component: CustomElementConstructor
): void => {
  if (!("customElements" in window)) return;

  customElements.define(tag.toLowerCase(), Component);
};

export default newCustomElement;
