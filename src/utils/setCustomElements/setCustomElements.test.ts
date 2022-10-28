import { components } from "../../components/components";
import setCustomElements from "./setCustomElements";

describe("setCustomElements function", () => {
  it("Should call define a custom element for each component passed", () => {
    const define = jest.spyOn(customElements, "define");

    setCustomElements(components);

    expect(define).toHaveBeenCalledTimes(Object.keys(components).length);
  });
});
