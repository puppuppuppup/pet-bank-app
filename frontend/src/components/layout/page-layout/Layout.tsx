'use client';
import { FC, PropsWithChildren } from 'react';
import SideBar from '@/components/layout/page-layout/SideBar/SideBar';
import ContentNav from '@/components/layout/page-layout/ContentNav/ContentNav';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='page'>
            <SideBar />
            <div className='page-content-wrapper'>
                <ContentNav />
                {children}
            </div>
        </div>
    );
};
