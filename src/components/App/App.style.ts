import mainTheme from "../../styles/mainTheme.js";

const { spacings } = mainTheme;

/**
 * TODO: Implement breakpoints. For some reason they don't seem to work well.
 */

const appStyle = `
  .app {
    margin: 0 auto;
    padding: 0 ${spacings.medium};
    padding-bottom: 6rem;
    min-height: 100vh;
  }
`;

export default appStyle;
