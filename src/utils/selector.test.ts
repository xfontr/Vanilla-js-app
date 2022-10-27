import { $, $$ } from "./selector";

describe("$ function", () => {
  it("Should return a node", () => {
    const container = document.createElement("section");

    const nodeToLookFor = document.createElement("div");
    container.appendChild(nodeToLookFor);

    const foundNode = $("div", container);

    expect(foundNode).toBe(nodeToLookFor);
  });
});

describe("$$ function", () => {
  it("should return a list of nodes", () => {
    const numberOfNodes = 2;
    const container = document.createElement("section");

    new Array(numberOfNodes)
      .fill("")
      .map(() => document.createElement("div"))
      .forEach((node) => container.appendChild(node));

    const foundNodes = $$("div", container);

    expect(foundNodes).toHaveLength(numberOfNodes);
  });
});
