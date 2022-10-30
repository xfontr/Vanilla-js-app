import Authors from "../features/news/components/Authors/Authors.js";
import News from "../features/news/components/News/News.js";
import NewsList from "../features/news/components/NewsList/NewsList.js";
import NewsPage from "../features/news/pages/NewsPage.js";
import { Components, Pages } from "../types/components.js";
import {
  defineComponents,
  definePages,
} from "../utils/defineComponents/defineComponents.js";
import App from "./App/App.js";
import Button from "./Button/Button.js";

export const allComponents = [App, Button, News, NewsList, Authors];
export const allPages = [NewsPage];

export const basicComponents: Components = {
  app: {},
  button: {},
  news: {},
  newslist: {},
  authors: {},
};

export const basicPages: Pages = {
  newspage: {},
};

export const components = defineComponents(allComponents, basicComponents);

export const pages = definePages(allPages, basicPages);
