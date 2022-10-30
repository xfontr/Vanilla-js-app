import ContextProvider from "../../../components/wrappers/ContextProvider.js";
import INews from "../types/News.js";

const newsContextInitialState = {
  news: [] as INews[],
};

class NewsContextProvider extends ContextProvider<
  typeof newsContextInitialState
> {
  constructor() {
    super(newsContextInitialState);
  }
}

export default NewsContextProvider;
