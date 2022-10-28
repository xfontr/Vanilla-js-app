import shadowOptions from "../../config/shadowOptions.js";
import ComponentLayout from "./ComponentLayout.js";

class Component extends ComponentLayout {
  private elementType: string;

  constructor(element?: string) {
    super();
    this.elementType = element || "fragment";

    this.renderContainer();
  }

  private setWrapper(): void {
    if (this.elementType === "fragment") {
      this.wrapper = document.createDocumentFragment();
      return;
    }

    this.wrapper = document.createElement(this.elementType);
  }

  private renderContainer(): void {
    this.setWrapper();
    this.attachShadow(shadowOptions);
  }
}

export default Component;
