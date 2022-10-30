import ContextProvider from "../../../components/wrappers/ContextProvider.js";
import { newsList } from "../mocks/news.js";
import News from "../types/News.js";

const newsContextInitialState = {
  news: newsList as News[],
};

class NewsContextProvider extends ContextProvider<
  typeof newsContextInitialState
> {
  constructor(element?: string) {
    super(newsContextInitialState, element);
  }
}

export default NewsContextProvider;
