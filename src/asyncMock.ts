import { Product } from './lib/models/Product';

const products: Product[] = [
  {
    id: 1,
    name: 'Bored Ape 382',
    price: 64,
    category: 'ART',
    img: 'https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg',
    stock: 20,
    description:
      'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
  },
  {
    id: 2,
    name: 'Bored Ape 155',
    price: 83,
    category: 'GAMING',
    img: 'https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg',
    stock: 20,
    description:
      'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
  },
  {
    id: 3,
    name: 'Bored Ape 720',
    price: 77,
    category: 'MEMBERSHIPS',
    img: 'https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg',
    stock: 20,
    description:
      'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
  },
  {
    id: 4,
    name: 'Bored Ape 312',
    price: 94,
    category: 'ART',
    img: 'https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg',
    stock: 20,
    description:
      'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
  },
  {
    id: 5,
    name: 'Bored Ape 455',
    price: 80,
    category: 'GAMING',
    img: 'https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg',
    stock: 20,
    description:
      'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
  },
  {
    id: 6,
    name: 'Bored Ape 123',
    price: 74,
    category: 'MEMBERSHIPS',
    img: 'https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg',
    stock: 20,
    description:
      'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
  },
];

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (
  productId: number
): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
