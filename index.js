// Write your classes here

//- A `Tree` instance should take in one parameter when created, `species`,
  // and assign this to a property named `species`.
  class Tree {
    constructor(species) {
      this.species = species;
    }
    // - A `Tree` should have a static method, `definition()`, that returns a short
  // definition of all trees.
    static definition() {
      return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.)`;
    }
  }
