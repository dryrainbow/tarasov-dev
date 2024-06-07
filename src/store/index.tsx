import { createSignal, createContext, useContext } from "solid-js";
import type { Accessor, Setter } from 'solid-js';

export type Store = [
  { 
    visibleChapter: Accessor<string>,
    scrolling: Accessor<boolean>,
  }, 
  { 
    setVisibleChapter: Setter<string>,
    setScrolling: Setter<boolean>,
  },
]

const StoreContext = createContext<Store>();

export function StoreProvider(props: any) {
  const [visibleChapter, setVisibleChapter] = createSignal('home');
  const [scrolling, setScrolling] = createSignal(false);

  const store: Store = [
    {
      visibleChapter,
      scrolling,
    },
    {
      setVisibleChapter,
      setScrolling,
    }
  ];

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}

export function useStore() { 
  return useContext(StoreContext); 
}
