'use client';
import { FC, PropsWithChildren } from 'react';
import SideBar from './SideBar/SideBar';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='page'>
            <Provider store={store}>
                <SideBar />
                {children}
            </Provider>
        </div>
    );
};
