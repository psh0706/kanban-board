import { BoardListProps } from "./common.type";

export const TEMP_LIST_DATA: BoardListProps[] = [
  {
    id: 1,
    title: "To Do",
    entities: [
      {
        id: 1,
        title: "Card 1",
        description: "Card 1 Description",
      },
      {
        id: 2,
        title: "Card 2",
        description: "Card 2 Description",
      },
      {
        id: 3,
        title: "Card 3",
        description: "Card 3 Description",
      },
    ],
  },
  {
    id: 2,
    title: "In Progress",
    entities: [],
  },
  {
    id: 3,
    title: "Done",
    entities: [],
  },
];
