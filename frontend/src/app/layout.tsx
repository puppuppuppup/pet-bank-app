import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.scss';

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
    title: 'Dynasty Bank',
    description: 'Dynasty Bank Web App',
    icons: {
        icon: [
            {
                href: '/images/favicon.ico',
                url: '/images/favicon.ico',
            },
        ],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ru'>
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
