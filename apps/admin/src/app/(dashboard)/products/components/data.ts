export interface Products {
  id: string;
  name: string;
  sku: string;
  url: string;
  status: string;
  price: string;
  stock: string;
  variants?: {
    id: string;
    name: string;
    sku: string;
    url: string;
    status: string;
    price: string;
    stock: string;
  }[];
}

export const products: Products[] = [
  {
    id: "1",
    name: "M3 Macbook Air 13 inch 2024",
    sku: "135341905934",
    url: "/dummy/category/electronics.png",
    status: "available",
    price: "4500000",
    stock: "6",
    variants: [
      {
        id: "11",
        name: "12-Core CPU / 16-Core GPU / 24GB unified memory / 512GB / Silver",
        sku: "135341905934",
        url: "/dummy/category/electronics.png",
        status: "available",
        price: "5200000",
        stock: "3",
      },
      {
        id: "12",
        name: "12-Core CPU / 16-Core GPU / 24GB unified memory / 512GB / Silver",
        sku: "135341905934",
        url: "/dummy/category/electronics.png",
        status: "available",
        price: "4800000",
        stock: "3",
      },
    ],
  },
  {
    id: "2",
    name: "M3 Macbook Air 13 inch 2024",
    sku: "135341905934",
    url: "/dummy/category/electronics.png",
    status: "available",
    price: "4500000",
    stock: "6",
    variants: [
      {
        id: "11",
        name: "12-Core CPU / 16-Core GPU / 24GB unified memory / 512GB / Silver",
        sku: "135341905934",
        url: "/dummy/category/electronics.png",
        status: "available",
        price: "5200000",
        stock: "3",
      },
      {
        id: "12",
        name: "12-Core CPU / 16-Core GPU / 24GB unified memory / 512GB / Silver",
        sku: "135341905934",
        url: "/dummy/category/electronics.png",
        status: "available",
        price: "4800000",
        stock: "3",
      },
    ],
  },
  {
    id: "3",
    name: "M3 Macbook Air 13 inch 2024",
    sku: "135341905934",
    url: "/dummy/category/electronics.png",
    status: "available",
    price: "4500000",
    stock: "6",
  },
  {
    id: "4",
    name: "M3 Macbook Air 13 inch 2024",
    sku: "135341905934",
    url: "/dummy/category/electronics.png",
    status: "available",
    price: "4500000",
    stock: "6",
  },
  {
    id: "5",
    name: "M3 Macbook Air 13 inch 2024",
    sku: "135341905934",
    url: "/dummy/category/electronics.png",
    status: "available",
    price: "4500000",
    stock: "6",
  },
  {
    id: "6",
    name: "M3 Macbook Air 13 inch 2024",
    sku: "135341905934",
    url: "/dummy/category/electronics.png",
    status: "available",
    price: "4500000",
    stock: "6",
  },
  {
    id: "7",
    name: "M3 Macbook Air 13 inch 2024",
    sku: "135341905934",
    url: "/dummy/category/electronics.png",
    status: "available",
    price: "4500000",
    stock: "6",
  },
  {
    id: "8",
    name: "M3 Macbook Air 13 inch 2024",
    sku: "135341905934",
    url: "/dummy/category/electronics.png",
    status: "available",
    price: "4500000",
    stock: "6",
  },
  {
    id: "9",
    name: "M3 Macbook Air 13 inch 2024",
    sku: "135341905934",
    url: "/dummy/category/electronics.png",
    status: "available",
    price: "4500000",
    stock: "6",
    variants: [
      {
        id: "11",
        name: "12-Core CPU / 16-Core GPU / 24GB unified memory / 512GB / Silver",
        sku: "135341905934",
        url: "/dummy/category/electronics.png",
        status: "available",
        price: "5200000",
        stock: "3",
      },
      {
        id: "12",
        name: "12-Core CPU / 16-Core GPU / 24GB unified memory / 512GB / Silver",
        sku: "135341905934",
        url: "/dummy/category/electronics.png",
        status: "available",
        price: "4800000",
        stock: "3",
      },
    ],
  },
  {
    id: "10",
    name: "M3 Macbook Air 13 inch 2024",
    sku: "135341905934",
    url: "/dummy/category/electronics.png",
    status: "available",
    price: "4500000",
    stock: "6",
    variants: [
      {
        id: "11",
        name: "12-Core CPU / 16-Core GPU / 24GB unified memory / 512GB / Silver",
        sku: "135341905934",
        url: "/dummy/category/electronics.png",
        status: "available",
        price: "5200000",
        stock: "3",
      },
      {
        id: "12",
        name: "12-Core CPU / 16-Core GPU / 24GB unified memory / 512GB / Silver",
        sku: "135341905934",
        url: "/dummy/category/electronics.png",
        status: "available",
        price: "4800000",
        stock: "3",
      },
    ],
  },
];
