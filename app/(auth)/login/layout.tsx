// src/app/(auth)/login/layout.tsx
export default function LoginLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex items-center justify-center min-h-screen bg-white p-4">
            {children}
        </section>
    );
}
