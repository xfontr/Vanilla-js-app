import News from "../News/News.js";
import NewsContextProvider from "../../store/NewsContextProvider.js";
import newsListStyle from "./NewsList.style.js";
import createElement from "../../../../utils/elementHandlers.js";

class NewsList extends NewsContextProvider {
  constructor() {
    super();

    this.addRerender(() => {
      this.render();
    });
  }

  private render() {
    const allNews = this.consumer().news;

    if (!allNews.length) return;

    this.shadowRoot.innerHTML = "";

    const list = createElement({
      element: "ul",
      className: "news-list__list",
    });

    this.consumer().news.forEach((currentNews) => {
      const listElement = createElement({
        element: "li",
      });

      const toAppend = new News(currentNews);
      listElement.appendChild(toAppend);
      list.appendChild(listElement);
    });

    this.shadowRoot.appendChild(list);
    this.setChildren();
    this.renderTemplate("", newsListStyle);
  }

  connectedCallback(): void {
    this.render();
  }
}

export default NewsList;
