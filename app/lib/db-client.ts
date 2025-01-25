// src/app/lib/db-client.ts

/**
 * This is a placeholder for a database client or any data fetching logic.
 * Replace with real DB logic (e.g., using DynamoDB, RDS, or any other).
 */

export async function getProducts() {
    // Mock data
    return [
        { id: '1', name: 'Product A', price: 99.99, description: 'Description of Product A' },
        { id: '2', name: 'Product B', price: 149.99, description: 'Description of Product B' },
    ];
}

export async function getProductById(id: string) {
    // Mock single product
    return {
        id,
        name: `Product ${id}`,
        price: 199.99,
        description: `Description of Product ${id}`,
    };
}
