import Component from "./Component.js";
import Context from "../../types/Context.js";

const store = new WeakMap<Context>();

class ContextProvider<T extends Context> extends Component {
  private context: T;
  private key: T;

  constructor(initialValue: T, element?: string) {
    super(element);

    this.key = initialValue;
    this.context = store.get(this.key);

    if (!this.context)
      store.set(initialValue, { context: initialValue, rerenders: [] });

    this.context = store.get(this.key).context;
  }

  protected dispatch(newState: (currentState: T) => T): void {
    store.set(this.key, {
      context: { ...newState({ ...store.get(this.key).context }) },
      rerenders: store.get(this.key).rerenders,
    });

    this.context = store.get(this.key).context;
    this.shadowRoot.innerHTML = "";
    this.innerHTML = "";
    this.provide();

    this.rerender();
  }

  protected addRerender(rerender: Function) {
    const localStore = store.get(this.key);

    store.set(this.key, {
      ...localStore,
      rerenders: [...localStore.rerenders, rerender],
    });
  }

  private rerender(): void {
    store.get(this.key).rerenders.forEach((rerender: Function) => rerender());
  }

  protected consumer(): T {
    return { ...store.get(this.key).context };
  }

  private provide() {
    this.setChildren();
    this.renderTemplate("", "");
  }

  connectedCallback(): void {
    this.provide();
  }
}

export default ContextProvider;
