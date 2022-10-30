import News from "../types/News";

export const news: News = {
  author: "John Doe",
  title: "Lorem ipsum William Dafoe",
  id: "van1",
};

export const newsList: News[] = [{ ...news }, { ...news, id: "van2" }];
