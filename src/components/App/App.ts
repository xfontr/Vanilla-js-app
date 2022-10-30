import appStyle from "./App.style.js";
import Component from "../wrappers/Component.js";

export const AppTag = "vanilla-app";

class App extends Component {
  constructor() {
    super("div");
  }

  connectedCallback(): void {
    this.setChildren();
    this.renderTemplate("app", appStyle);
  }
}

export default App;
