import { ComponentName, Components } from "../types/components.js";
import App from "./App/App.js";
import Button from "./Button/Button.js";

const tagPrefix = "van-";
const allComponents = [App, Button];

const components: Components = {
  app: {},
  button: {},
};

allComponents.forEach((Component: CustomElementConstructor) => {
  const componentName = Component.name.toLowerCase() as ComponentName;

  components[componentName] = {
    ...components[componentName],
    class: componentName,
    tag: `${tagPrefix}${componentName}`,
    Component,
  };
});

export default components;
