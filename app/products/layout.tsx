// src/app/products/layout.tsx
export default function ProductsLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <section className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Our Products</h2>
            {children}
        </section>
    );
}
