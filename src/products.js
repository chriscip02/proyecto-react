const products = [
  {
    title: "iPhone 13 Pro Max",
    image: "https://ibb.co/3kxFHZf",
    description:
      "El último iPhone con pantalla Super Retina XDR de 6.7 pulgadas, chip A15 Bionic, cámara Pro de 12 MP y 5G. Disponible en color grafito, oro, plata y azul sierra.",
    price: 199999,
    stock: 10,
    category: "Celulares",
  },
  {
    title: "Samsung Galaxy S21",
    image:
      "https://images.pexels.com/photos/7051666/pexels-photo-7051666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "El Samsung Galaxy S21 cuenta con una pantalla Dynamic AMOLED de 6.2 pulgadas, chip Exynos 2100, cámara de 64 MP y 5G. Disponible en color Phantom Grey, Phantom White y Phantom Pink.",
    price: 129999,
    stock: 8,
    category: "Celulares",
  },
  {
    title: "Xiaomi Mi 11",
    image:
      "https://images.pexels.com/photos/8226844/pexels-photo-8226844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "El Xiaomi Mi 11 cuenta con una pantalla AMOLED de 6.81 pulgadas, chip Snapdragon 888, cámara de 108 MP y 5G. Disponible en color negro y blanco.",
    price: 89999,
    stock: 15,
    category: "Celulares",
  },
  {
    title: "iPhone 12",
    image:
      "https://images.pexels.com/photos/6783679/pexels-photo-6783679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "El iPhone 12 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas, chip A14 Bionic, cámara de 12 MP y 5G. Disponible en color blanco, negro, verde, rojo y azul.",
    price: 124999,
    stock: 7,
    category: "Celulares",
  },
  {
    title: "Samsung Galaxy A52",
    image:
      "https://images.pexels.com/photos/6974726/pexels-photo-6974726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "El Samsung Galaxy A52 cuenta con una pantalla Super AMOLED de 6.5 pulgadas, chip Snapdragon 720G, cámara de 64 MP y 5G. Disponible en color Awesome Black, Awesome White, Awesome Blue y Awesome Violet.",
    price: 77999,
    stock: 12,
    category: "Celulares",
  },
  {
    title: "Xiaomi Redmi Note 10 Pro",
    image:
      "https://images.pexels.com/photos/6632254/pexels-photo-6632254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Un smartphone con pantalla AMOLED de 6.67 pulgadas, procesador Snapdragon 732G, cámara principal de 108 MP y batería de 5020 mAh. Disponible en color bronce, azul y gris.",
    price: 54999,
    stock: 15,
    category: "Celulares",
  },
  {
    title: "MacBook Air M1",
    image:
      "https://images.pexels.com/photos/6308086/pexels-photo-6308086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "La última MacBook Air con chip M1 de Apple, 8 GB de RAM y almacenamiento de 256 GB. Pantalla Retina de 13.3 pulgadas y batería de hasta 18 horas de duración.",
    price: 227499,
    stock: 5,
    category: "Notebooks",
  },
  {
    title: "Lenovo ThinkPad X1 Carbon",
    image:
      "https://images.pexels.com/photos/936110/pexels-photo-936110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Una laptop empresarial ultradelgada y liviana con pantalla de 14 pulgadas, procesador Intel Core i7 de décima generación, 16 GB de RAM y almacenamiento SSD de 1 TB.",
    price: 259999,
    stock: 8,
    category: "Notebooks",
  },
  {
    title: "HP Pavilion x360",
    image:
      "https://images.pexels.com/photos/2773918/pexels-photo-2773918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Una laptop 2 en 1 con pantalla táctil de 14 pulgadas, procesador Intel Core i5 de décima generación, 8 GB de RAM y almacenamiento SSD de 512 GB. Incluye lápiz óptico HP.",
    price: 114999,
    stock: 12,
    category: "Notebooks",
  },
  {
    title: "Acer Nitro 5",
    image:
      "https://images.pexels.com/photos/6225387/pexels-photo-6225387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Una laptop para gamers con pantalla IPS de 15.6 pulgadas, procesador AMD Ryzen 5 5600H, 16 GB de RAM y almacenamiento SSD de 512 GB. Incluye tarjeta gráfica NVIDIA GeForce RTX 3060.",
    price: 224999,
    stock: 6,
    category: "Notebooks",
  },
  {
    title: "Dell XPS 13",
    image:
      "https://images.pexels.com/photos/1266984/pexels-photo-1266984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Una laptop premium con pantalla Full HD de 13.3 pulgadas, procesador Intel Core i7 de undécima generación, 16 GB de RAM y almacenamiento SSD de 512 GB.",
    price: 189999,
    stock: 10,
    category: "Notebooks",
  },
  {
    title: "Asus VivoBook S14",
    image:
      "https://images.pexels.com/photos/811910/pexels-photo-811910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Laptop de 14 pulgadas con procesador Intel Core i5, 8GB de RAM y 512GB de almacenamiento SSD.",
    price: 160000,
    stock: 10,
    category: "Notebooks",
  },
  {
    title: "iPad Air",
    image: "https://images.unsplash.com/photo-1522312346375-2a88a8be5d27",
    description:
      "La nueva iPad Air es más potente que nunca, con un diseño espectacular y una pantalla Retina impresionante.",
    price: 57900,
    stock: 10,
    category: "Tablets",
  },
  {
    title: "Samsung Galaxy Tab S7",
    image: "https://images.unsplash.com/photo-1622635853507-cedfc90fd72b",
    description:
      "La Samsung Galaxy Tab S7 es una tablet con una pantalla increíble y un rendimiento excepcional.",
    price: 79999,
    stock: 8,
    category: "Tablets",
  },
  {
    title: "Lenovo Tab P11 Pro",
    image: "https://images.unsplash.com/photo-1618543033311-4ba12178dfe4",
    description:
      "La Lenovo Tab P11 Pro es una tablet de alta gama con una pantalla OLED impresionante y un rendimiento excepcional.",
    price: 64999,
    stock: 12,
    category: "Tablets",
  },
  {
    title: "Huawei MatePad Pro",
    image: "https://images.unsplash.com/photo-1617310146997-d530c41e2f7b",
    description:
      "La Huawei MatePad Pro es una tablet de alta gama con una pantalla impresionante y un rendimiento excepcional.",
    price: 74999,
    stock: 5,
    category: "Tablets",
  },
  {
    title: "Amazon Fire HD 10",
    image: "https://images.unsplash.com/photo-1620742806038-6dd268f6b231",
    description:
      "La Amazon Fire HD 10 es una tablet asequible con una pantalla grande y una duración de batería impresionante.",
    price: 23000,
    stock: 15,
    category: "Tablets",
  },
  {
    title: "Microsoft Surface Pro 7",
    image: "https://images.unsplash.com/photo-1575992789709-3a4c0a2301c6",
    description:
      "La Microsoft Surface Pro 7 es una tablet potente y versátil que se convierte en un portátil completo con un teclado opcional.",
    price: 79999,
    stock: 6,
    category: "Tablets",
  },
];

export default products;
