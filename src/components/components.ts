import { Components } from "../types/components.js";
import defineComponents from "../utils/defineComponents/defineComponents.js";
import App from "./App/App.js";
import Button from "./Button/Button.js";

export const allComponents = [App, Button];

export const basicComponents: Components = {
  app: {},
  button: {},
};

export const components = defineComponents(allComponents, basicComponents);
