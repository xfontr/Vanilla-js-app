import mainTheme from "../../../../styles/mainTheme.js";

const { spacings, colors } = mainTheme;

const newsStyle = `
  .news {
    padding: ${spacings.big};
    background-color: ${colors.secondary};
    border-radius: ${spacings["rad-big"]};
  }

  ::slotted(.news__author) {
    display: block;
    margin-bottom: ${spacings.medium};
    color: ${colors["typography--lighter"]}};
  }
`;

export default newsStyle;
