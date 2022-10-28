import mainTheme from "../../styles/mainTheme.js";

const { breakpoints, spacings } = mainTheme;

const appStyle = `
  :host {
    margin: 0 auto;
    max-width: ${breakpoints.small};
    padding: 0 ${spacings.medium};
    position: relative;
    padding-bottom: 6rem;
    min-height: 100vh;

    @media (min-width: ${breakpoints.small}) {
      max-width: ${breakpoints.medium};
    }

    @media (min-width: ${breakpoints.medium}) {
      max-width: ${breakpoints.big};
    }
  }
`;

export default appStyle;
