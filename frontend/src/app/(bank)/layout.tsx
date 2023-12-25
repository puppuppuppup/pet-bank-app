'use client';
import { Layout } from '@/components/layout/Layout';
import Providers from '../../components/utils/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            <Layout>{children}</Layout>
        </Providers>
    );
}
