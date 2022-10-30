import { allComponents, basicComponents } from "../../components/components";
import { defineComponents } from "./defineComponents";

describe("defineComponents function", () => {
  it("should return all the app components", () => {
    const { app } = defineComponents(allComponents, basicComponents);

    expect(app.class).toBe("app");
    expect(app.tag).toBe("van-app");
  });
});
