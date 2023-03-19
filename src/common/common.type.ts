// 리스트가 가지는 타입
export type BoardListProps = {
  listId: string;
  title: string;
  entities: CardProps[];
};

// 카드가 가지는 타입
export type CardProps = {
  cardId: string;
  title: string;
  description: string;
};
