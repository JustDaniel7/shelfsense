// src/app/components/ProductCard.tsx
import { Product } from '../types/product';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="border border-gray-200 p-4 rounded shadow-sm bg-white hover:shadow-md transition-shadow mb-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">Price: ${product.price}</p>
            {product.description && (
                <p className="text-sm text-gray-500 mt-1">{product.description}</p>
            )}
        </div>
    );
}
