'use client';
import { Layout } from '@/components/layout/page-layout/Layout';
import Providers from '@/components/providers/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            <Layout>{children}</Layout>
        </Providers>
    );
}
