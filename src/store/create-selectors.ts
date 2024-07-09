export const createSelectors = (_store: any) => {
  const store = _store;
  store.use = {};

  for (const k of Object.keys(store.getState())) {
    store.use[k] = () => store((s: any) => s[k]);
  }
  return store;
};
