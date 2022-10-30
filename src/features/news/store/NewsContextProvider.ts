import ContextProvider from "../../../components/wrappers/ContextProvider.js";
import { newsList } from "../mocks/news.js";

const newsContextInitialState = {
  news: newsList,
};

class NewsContextProvider extends ContextProvider<
  typeof newsContextInitialState
> {
  constructor(element?: string) {
    super(newsContextInitialState, element);
  }
}

export default NewsContextProvider;
