import { BoardListProps } from "./common.type";

export const TEMP_DATA: BoardListProps[] = [
  {
    id: "list1",
    title: "To Do",
    entities: [
      {
        id: "card1",
        title: "Card 1",
        description: "Card 1 Description",
      },
      {
        id: "card2",
        title: "Card 2",
        description: "Card 2 Description",
      },
      {
        id: "card3",
        title: "Card 3",
        description: "Card 3 Description",
      },
    ],
  },
  {
    id: "list2",
    title: "In Progress",
    entities: [],
  },
  {
    id: "list3",
    title: "Done",
    entities: [],
  },
];
