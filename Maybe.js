const Just = (x) => ({
  chain: f => f(x),
  emit: () => x,
  map: f => MaybeOf(f(x)),
  fork: (_, g) => g(x),
  isJust: true,
  isNothing: false,
  inspect: () => `Just(${x})`,
});

const Nothing = (x) => ({
  chain: _ => Nothing(),
  emit: () => Nothing(),
  map: _ => Nothing(),
  fork: (f, _) => f(),
  isJust: false,
  isNothing: true,
  inspect: () => `Nothing`,
});

const Maybe = {
   Of: x => x === null || x === undefined || x.isNothing ? Nothing() : Just(x);
};


/* for modular script
const exportMaybe = {
  of: MaybeOf
};

export { 
    exportMaybe as Maybe
}
*/
