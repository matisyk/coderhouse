export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
  stock: number;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'a',
    price: 10,
    category: 'a',
    img: 'https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg',
    stock: 20,
    description: 'a',
  },
  {
    id: 2,
    name: 'a',
    price: 10,
    category: 'a',
    img: 'https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg',
    stock: 20,
    description: 'a',
  },
  {
    id: 3,
    name: 'a',
    price: 10,
    category: 'a',
    img: 'https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg',
    stock: 20,
    description: 'a',
  },
];

const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export default getProducts;
