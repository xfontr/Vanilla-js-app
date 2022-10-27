import shadowOptions from "../config/shadowOptions.js";
import SlotChildrenStatus from "../types/SlotChildrenStatus.js";
import ElementWithChildren from "./ElementWithChildren.js";

class FancyElement extends ElementWithChildren {
  constructor(children: SlotChildrenStatus = "CHILDREN_TOP") {
    super(children);

    this.render();
  }

  private render(): void {
    this.attachShadow(shadowOptions);
    this.setDefaultChildren();
  }
}

export default FancyElement;
