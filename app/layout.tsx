// src/app/layout.tsx
import './globals.css';
import { Metadata } from 'next';
import Providers from './providers';

export const metadata: Metadata = {
    title: 'AI Software Project',
    description: 'MVP for Next.js app with AWS Amplify and Forecast API',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-gray-50">
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
