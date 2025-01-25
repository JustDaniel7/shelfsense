// src/app/providers.tsx
'use client';

import React from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '@/aws-exports'; // or the correct relative path

Amplify.configure(awsExports);

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <>
            {children}
        </>
    );
}
