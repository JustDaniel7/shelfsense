// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to the AI Software Project MVP</h1>
            <p className="mb-2">This is the home page. Choose a route:</p>
            <ul className="list-disc ml-6">
                <li className="mb-1">
                    <Link href="/(auth)/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </li>
                <li>
                    <Link href="/products" className="text-blue-600 hover:underline">
                        Products
                    </Link>
                </li>
            </ul>
        </main>
    );
}
