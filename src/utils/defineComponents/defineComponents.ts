import tagPrefix from "../../config/tagPrefix.js";
import {
  ComponentName,
  Components,
  PageName,
  Pages,
} from "../../types/components.js";

export const defineComponents = (
  allComponents: CustomElementConstructor[],
  components: Components
): Components => {
  const definedComponents = components;

  allComponents.forEach((Component: CustomElementConstructor) => {
    const componentName = Component.name.toLowerCase() as ComponentName;

    definedComponents[componentName] = {
      ...definedComponents[componentName],
      class: componentName,
      tag: `${tagPrefix}${componentName}`,
      Component,
    };
  });

  return definedComponents;
};

export const definePages = (
  allPages: CustomElementConstructor[],
  pages: Pages
): Pages => {
  const definedPages = pages;

  allPages.forEach((Component: CustomElementConstructor) => {
    const pageName = Component.name.toLowerCase() as PageName;

    definedPages[pageName] = {
      ...definedPages[pageName],
      tag: `${tagPrefix}${pageName}`,
      Component,
    };
  });

  return definedPages;
};
