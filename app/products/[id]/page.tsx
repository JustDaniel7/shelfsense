// src/app/products/[id]/page.tsx
import { getProductById } from '../../lib/db-client';

interface ProductPageProps {
    params: {
        id: string;
    };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
    const product = await getProductById(params.id);

    if (!product) {
        return <p className="text-red-500">Product not found.</p>;
    }

    return (
        <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="mt-2">Price: ${product.price}</p>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        </div>
    );
}
