const render = (
  node: HTMLElement,
  parent: HTMLElement | Document = document
): HTMLElement => parent.appendChild(node);

export default render;
