import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Беспроводные наушники Premium",
    price: 12999,
    originalPrice: 15999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    badge: "Скидка",
    rating: 5,
  },
  {
    id: 2,
    name: "Умные часы SportMax",
    price: 25999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    badge: "Новинка",
    rating: 4,
  },
  {
    id: 3,
    name: "Портативная колонка SoundWave",
    price: 8999,
    originalPrice: 11999,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
    rating: 4,
  },
  {
    id: 4,
    name: "Игровая клавиатура MechPro",
    price: 7999,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
    badge: "Хит",
    rating: 5,
  },
  {
    id: 5,
    name: "Веб-камера HD Vision",
    price: 4999,
    originalPrice: 6999,
    image:
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop",
    rating: 4,
  },
  {
    id: 6,
    name: "Беспроводная мышь Precision",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    rating: 4,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Популярные товары
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выбирайте из нашей коллекции самых востребованных товаров с
            отличными отзывами
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Посмотреть все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
