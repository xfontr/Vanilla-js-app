import FancyElement from "../../lib/FancyElement.js";
import newCustomElement from "../../utils/newCustomElement.js";

export const AppTag = "app-container";

class App extends FancyElement {
  constructor() {
    super("CHILDREN_TOP");
    this.className = "app";
  }
}

newCustomElement(AppTag, App);

export default App;
