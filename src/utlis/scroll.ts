import { createEffect } from "solid-js";

import type { Store } from '../store/index';

export const scrollHereWhenSelected = (element: HTMLElement, store: Store, chapter: string) => {
  const [state, setters] = store;
  return createEffect((prev) => {
    if (prev !== state.visibleChapter() && state.visibleChapter() === chapter && state.scrolling()) {
      element.scrollIntoView({behavior: "smooth"});
      setters.setScrolling(true);
    }
    return state.visibleChapter();
  });
}
