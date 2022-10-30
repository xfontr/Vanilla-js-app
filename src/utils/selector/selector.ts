type Container = Element | Document | ShadowRoot;

export const $ = (tag: string, container: Container = document): Element =>
  container.querySelector(tag);

export const $$ = (
  tag: string,
  container: Container = document
): NodeListOf<Element> => container.querySelectorAll(tag);
