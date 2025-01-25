// src/app/products/page.tsx
import Link from 'next/link';
import { getProducts } from '../lib/db-client';
import ProductCard from '../components/ProductCard';

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div>
            {products.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`} className="block">
                    <ProductCard product={product} />
                </Link>
            ))}
        </div>
    );
}
