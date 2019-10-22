export const people = [
  { id: 0,
    name: "Forrest Gump",
    score: 9.51
  },
  { id: 1,
    name: "The Notebook",
    score: 9.47
  },
  { id: 2,
    name: "Joker",
    score: 9.03
  },
  { id: 3,
    name: "About Time",
    score: 9.28
  }
];

export const getById = id => {
  const filterPeople = people.filter(person => person.id === id);
  return filterPeople[0];
}
