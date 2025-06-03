import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  badge,
  rating,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-lg bg-gray-100"
          />
          {badge && (
            <Badge className="absolute top-2 left-2 bg-primary">{badge}</Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
          >
            <Icon name="Heart" size={16} />
          </Button>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>

          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={
                  i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                }
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">({rating})</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              {price.toLocaleString("ru-RU")} ₽
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice.toLocaleString("ru-RU")} ₽
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full group-hover:bg-primary/90 transition-colors">
          <Icon name="ShoppingCart" size={16} className="mr-2" />В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
