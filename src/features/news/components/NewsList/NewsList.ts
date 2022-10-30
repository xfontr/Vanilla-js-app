import News from "../News/News.js";
import NewsContextProvider from "../../store/NewsContextProvider.js";

class NewsList extends NewsContextProvider {
  constructor() {
    super();

    this.addRerender(() => {
      this.render();
    });
  }

  private render() {
    this.shadowRoot.innerHTML = "<van-button>Add news</van-button>";

    this.consumer().news.forEach((currentNews) => {
      const toAppend = new News(currentNews, currentNews.id);
      this.shadowRoot.appendChild(toAppend);
    });

    this.renderTemplate("", "");
  }

  connectedCallback(): void {
    this.render();
  }
}

export default NewsList;
