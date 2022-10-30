import Component from "../../../../components/wrappers/Component.js";
import INews from "../../types/News.js";

class News extends Component {
  private newsTitle: string;
  private author: string;
  private newsId: string;

  constructor(news: INews, key: string) {
    super("div");
    this.setAttributes(news);
    this.setAttribute("key", key);
  }

  private render() {
    this.wrapper.textContent = this.newsTitle + this.author + this.newsId;
    this.renderTemplate("news", "");
  }

  private setAttributes(news: INews) {
    this.newsTitle = news.title;
    this.author = news.author;
    this.newsId = news.id;
  }

  connectedCallback(): void {
    this.render();
  }
}

export default News;
