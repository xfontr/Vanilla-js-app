import { components } from "../../../components/components.js";
import Component from "../../../components/wrappers/Component.js";

class NewsPage extends Component {
  constructor() {
    super("section");
  }

  render() {
    this.shadowRoot.innerHTML = `
      <${components.newslist.tag}></${components.newslist.tag}>
      <${components.authors.tag}></${components.authors.tag}>
    `;
  }

  connectedCallback(): void {
    this.render();
    this.setChildren();
    this.renderTemplate("", "");
  }
}

export default NewsPage;
