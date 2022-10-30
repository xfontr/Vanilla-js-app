import Authors from "../features/news/components/Authors/Authors.js";
import News from "../features/news/components/News/News.js";
import NewsList from "../features/news/components/NewsList/NewsList.js";
import { Components } from "../types/components.js";
import defineComponents from "../utils/defineComponents/defineComponents.js";
import App from "./App/App.js";
import Button from "./Button/Button.js";

export const allComponents = [App, Button, News, NewsList, Authors];

export const basicComponents: Components = {
  app: {},
  button: {},
  news: {},
  newslist: {},
  authors: {},
};

export const components = defineComponents(allComponents, basicComponents);
