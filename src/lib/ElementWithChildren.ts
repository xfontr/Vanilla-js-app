import SlotChildrenStatus from "../types/SlotChildrenStatus";

/**
 * @param {SlotChildrenStatus} children
 *
 * @returns Custom HTMLElement that allows handling its children with HTMLSlots
 */

class ElementWithChildren extends HTMLElement {
  private slotChildrenStatus: SlotChildrenStatus;
  protected slotChildren: HTMLSlotElement;

  constructor(children: SlotChildrenStatus) {
    super();
    this.slotChildrenStatus = children;
  }

  /**
   * Creates a HTMLSlotElement
   *
   * @returns void
   */

  private setSlotChildren(): void {
    this.slotChildren = document.createElement("slot");
  }

  /**
   * Places the slot element at the bottom.
   * Adviced to use after setting the component innerHTML when constructing it
   * Will also be called automatically if the children status is set to bottom
   *
   * @returns void
   */

  protected placeChildrenBottom(): void {
    this.shadowRoot.appendChild(this.slotChildren);
  }

  /**
   * Places the slot element at the bottom.
   * Adviced to use after setting the component innerHTML when constructing it
   * Will also be called automatically if the children status is set to top
   *
   * @returns void
   */

  protected placeChildrenTop(): void {
    const htmlBackup = this.shadowRoot.innerHTML;
    this.shadowRoot.innerHTML = "";

    this.shadowRoot.appendChild(this.slotChildren);
    this.shadowRoot.innerHTML += htmlBackup;
  }

  /**
   * If there are children, creates a slot and places it at the requested position
   * Warning: most of the times, default positions of top and bottom will have the same effect,
   * since the default innerHTML is empty
   *
   * @returns void
   */

  protected setDefaultChildren(): void {
    if (this.slotChildrenStatus === "CHILDREN_UNSET") return;

    this.setSlotChildren();

    if (this.slotChildrenStatus === "CHILDREN_TOP") this.placeChildrenTop();
    if (this.slotChildrenStatus === "CHILDREN_BOTTOM")
      this.placeChildrenBottom();
  }
}

export default ElementWithChildren;
