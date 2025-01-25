// src/app/(auth)/login/page.tsx
'use client';

import React, { useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // AWS Amplify Auth signIn
            const user = await Auth.signIn(email, password);
            console.log('User successfully signed in:', user);
            // TODO: Redirect or update UI after successful sign-in
        } catch (error: any) {
            console.error('Error signing in:', error);
            setErrorMsg(error.message || 'Error signing in');
        }
    };

    return (
        <div className="w-full max-w-md bg-gray-100 p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            {errorMsg && <p className="text-red-600 mb-2">{errorMsg}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                        Email
                    </label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block mb-1 font-medium">
                        Password
                    </label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}
