import Tag from "./Tag";

export type ComponentName = "app" | "button" | "news" | "newslist" | "authors";
export type PageName = "newspage";

export type Components = Record<
  ComponentName,
  Partial<{
    class: string;
    tag: Tag;
    Component: CustomElementConstructor;
  }>
>;

export type Pages = Record<
  PageName,
  Partial<{ tag: Tag; Component: CustomElementConstructor }>
>;
