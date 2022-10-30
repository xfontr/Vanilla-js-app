import Tag from "./Tag";

export type ComponentName = "app" | "button" | "news" | "newslist" | "authors";

export type Components = Record<
  ComponentName,
  Partial<{
    class: string;
    tag: Tag;
    Component: CustomElementConstructor;
  }>
>;
