'use client';
import { FC, PropsWithChildren } from 'react';
import SideBar from './SideBar/SideBar';
import ContentNav from './ui/ContentNav/ContentNav';

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
