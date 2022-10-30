import { components } from "../../../../components/components.js";
import { ComponentName } from "../../../../types/components.js";
import createElement from "../../../../utils/elementHandlers.js";
import { $ } from "../../../../utils/selector/selector.js";
import NewsContextProvider from "../../store/NewsContextProvider.js";
import INews from "../../types/News.js";
import newsStyle from "./News.style.js";

class News extends NewsContextProvider {
  private news: INews;

  constructor(news: INews) {
    super("article");
    this.setAttributes(news);
  }

  private setAttributes(news: INews) {
    this.news = news;
  }

  private addEventListeners() {
    $(".news__delete", this).addEventListener("click", () => {
      this.dispatch((currentState) => ({
        ...currentState,
        news: currentState.news.filter((news) => news.id !== this.news.id),
      }));
    });
  }

  private render() {
    const title = createElement({
      element: "h3",
      className: "news__title",
      textContent: this.news.title,
    });

    const author = createElement({
      element: "span",
      className: "news__author",
      textContent: this.news.author,
    });

    const deleteButton = createElement({
      element: components.button.tag,
      className: "news__delete",
      textContent: "Delete",
    });

    this.append(title, author, deleteButton);
    this.setChildren();
    this.renderTemplate("news", newsStyle);
    this.addEventListeners();
  }

  connectedCallback(): void {
    this.render();
  }
}

export default News;
