import { BoardListProps } from "./common.type";

export const TEMP_DATA: BoardListProps[] = [
  {
    listId: "list1",
    title: "To Do",
    entities: [
      {
        cardId: "card1",
        title: "Card 1",
        description: "Card 1 Description",
      },
      {
        cardId: "card2",
        title: "Card 2",
        description: "Card 2 Description",
      },
      {
        cardId: "card3",
        title: "Card 3",
        description: "Card 3 Description",
      },
    ],
  },
  {
    listId: "list2",
    title: "In Progress",
    entities: [],
  },
  {
    listId: "list3",
    title: "Done",
    entities: [],
  },
];
