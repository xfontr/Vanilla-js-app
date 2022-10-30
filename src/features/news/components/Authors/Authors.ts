import NewsContextProvider from "../../store/NewsContextProvider.js";

class Authors extends NewsContextProvider {
  constructor() {
    super();

    this.addRerender(() => {
      this.render();
    });
  }

  connectedCallback(): void {
    this.render();
  }

  private render() {
    this.shadowRoot.innerHTML = this.consumer()
      .news.map(({ author }, index) => author + index)
      .toString();
    this.setChildren();
    this.renderTemplate("", "");
  }
}

export default Authors;
