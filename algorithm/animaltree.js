/*
Output:
{
  animals: {
    mammals: {
      dogs: {
        chihahua: null,
        labrador: null
      },
      cats: {
        siamese: null,
        persian: null
      }
    }
  }
}
*/
let categories = [
  {
    id: "animals",
    parent: null,
  },
  {
    id: "mammals",
    parent: "animals",
  },
  {
    id: "cats",
    parent: "mammals",
  },
  {
    id: "dogs",
    parent: "mammals",
  },
  {
    id: "chihuahua",
    parent: "dogs",
  },
  {
    id: "labrador",
    parent: "dogs",
  },
  {
    id: "persian",
    parent: "cats",
  },
  {
    id: "siamese",
    parent: "cats",
  },
];

function makeTree(categories, parent) {
  let node = {};
  // let filteredCategories = categories.filter((c) => c.parent === parent);

  // if (filteredCategories.length === 0) return {};
  // for (let i of filteredCategories) {
  //   node[i.id] = makeTree(categories, i.id);
  // }
  categories
    .filter((c) => c.parent === parent)
    .forEach((c) => (node[c.id] = makeTree(categories, c.id)));
  return node;
}

console.log(makeTree(categories, null));
