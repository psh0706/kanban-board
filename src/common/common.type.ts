// 리스트가 가지는 타입
export type BoardListProps = {
  id: string;
  title: string;
  entities: CardProps[];
};

// 카드가 가지는 타입
export type CardProps = {
  id: string;
  title: string;
  description: string;
};
