import { components } from "../components.js";
import { ComponentName } from "../../types/components.js";

const sealed = (constructor: Function): void => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

@sealed
class ComponentLayout extends HTMLElement {
  protected template: HTMLTemplateElement;
  protected stylesheet: HTMLStyleElement;
  protected wrapper: HTMLElement | DocumentFragment;

  constructor() {
    super();
    this.setTemplate();
  }

  private setTemplate(): void {
    this.template = document.createElement("template");
    this.stylesheet = document.createElement("style");
  }

  private setDefaultClass(name: ComponentName) {
    if (this.wrapper instanceof DocumentFragment) {
      this.className = components[name].class;
      return;
    }

    this.wrapper.className = components[name].class;
  }

  protected setChildren(
    parent?: HTMLElement | DocumentFragment
  ): HTMLSlotElement {
    const slot = document.createElement("slot");

    if (parent) return parent.appendChild(slot);
    return this.wrapper.appendChild(slot);
  }

  protected renderTemplate(name: ComponentName | "", style: string) {
    this.stylesheet.textContent = style || "";

    if (name !== "") this.setDefaultClass(name);
    this.appendTemplate();
  }

  protected appendTemplate(): void {
    const { template, wrapper, stylesheet, shadowRoot } = this;

    template.content.append(wrapper, stylesheet);
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default ComponentLayout;
