export interface Food {
  id: number;
  name: string;
  category: string;
  img: string;
  price: number;
}

export const food: Food[] = [
  {
    id: 1,
    name: "비빔밥",
    img: "/FoodImage/bibimbab.jpeg",
    category: "한식",
    price: 8000,
  },
  {
    id: 2,
    name: "돈까스",
    category: "한식",
    img: "/FoodImage/don.jpg",
    price: 7000,
  },
  {
    id: 3,
    name: "삼겹살",
    category: "한식",
    img: "/FoodImage/gogi.jpg",
    price: 18000,
  },
  {
    id: 4,
    name: "짜장면",
    category: "중식",
    img: "/FoodImage/jajjang.jpg",
    price: 6000,
  },
  {
    id: 5,
    name: "김치찌개",
    category: "한식",
    img: "/FoodImage/kimchi.jpg",
    price: 10000,
  },
  {
    id: 6,
    name: "국수",
    category: "한식",
    img: "/FoodImage/noodle.jpeg",
    price: 6000,
  },
  {
    id: 7,
    name: "라면",
    category: "한식",
    img: "/FoodImage/ramen.jpg",
    price: 5000,
  },
];
