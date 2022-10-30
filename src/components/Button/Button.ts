import Component from "../wrappers/Component.js";
import buttonStyle from "./Button.style.js";

export const ButtonTag = "vanilla-button";

class Button extends Component {
  constructor() {
    super("button");
  }

  connectedCallback(): void {
    this.setChildren();
    this.renderTemplate("button", buttonStyle);
  }
}

export default Button;
