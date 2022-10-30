import mainTheme from "../../../../styles/mainTheme.js";

const { spacings } = mainTheme;

const newsListStyle = `
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .news-list__list {
    display: flex;
    flex-direction: column;
    gap: ${spacings.big};
  }
`;

export default newsListStyle;
