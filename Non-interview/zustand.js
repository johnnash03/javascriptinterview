/* Create a store */

import { create } from "zustand";
const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

/* Bind store to components */
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}

/* Fetch everything. Bad: Component updates on every state change */
const state = useBearStore();

/* Use shallow */
import { create } from "zustand";

const useMeals = create(() => ({
  papaBear: "large porridge-pot",
  mamaBear: "middle-size porridge pot",
  littleBear: "A little, small, wee pot",
}));

export const BearNames = () => {
  const names = useMeals((state) => Object.keys(state));

  return <div>{names.join(", ")}</div>;
};
// Now papa bear wants a pizza instead:

useMeals.setState({
  papaBear: "a large pizza",
});
// This change causes BearNames rerenders even though the actual output of names has not changed according to shallow equal.

// We can fix that using useShallow!

import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const useMeals = create(() => ({
  papaBear: "large porridge-pot",
  mamaBear: "middle-size porridge pot",
  littleBear: "A little, small, wee pot",
}));

export const BearNames = () => {
  const names = useMeals(useShallow((state) => Object.keys(state)));

  return <div>{names.join(", ")}</div>;
};
// Now they can all order other meals without causing unnecessary rerenders of our BearNames component

/* For more control over re-rendering, you may provide any custom equality function. */

const treats = useBearStore(
  (state) => state.treats,
  (oldTreats, newTreats) => compare(oldTreats, newTreats)
);

/* Overwriting state */
// The set function has a second argument, false by default. Instead of merging, it will replace the state model. Be careful not to wipe out parts you rely on, like actions.
import omit from "lodash-es/omit";

const useFishStore = create((set) => ({
  salmon: 1,
  tuna: 2,
  deleteEverything: () => set({}, true), // clears the entire store, actions included
  deleteTuna: () => set((state) => omit(state, ["tuna"]), true),
}));

/* Async actions */
// Just call set when you're ready, zustand doesn't care if your actions are async or not.
const useFishStore = create((set) => ({
  fishies: {},
  fetch: async (pond) => {
    const response = await fetch(pond);
    set({ fishies: await response.json() });
  },
}));

/* Read from state in actions */
// set allows fn-updates set(state => result), but you still have access to state outside of it through get.
const useSoundStore = create((set, get) => ({
  sound: "grunt",
  action: () => {
    const sound = get().sound;
  },
}));
