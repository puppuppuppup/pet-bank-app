'use client';

import React, { useMemo } from 'react';
import styles from './SideBar.module.scss';
import CategoryItem from '@/components/layout/ui/CategoryItem/CategoryItem';
import Link from 'next/link';
import { useCurrentBankPage } from '@/hooks/useBankPageOpened';
import { BankPageType } from '@/utils/types/types.store';
import { useActions } from '@/hooks/useActions';

const SideBar = () => {
    const categories: {
        main: { link: BankPageType; name: string }[];
        other: { link: BankPageType; name: string }[];
    } = useMemo(() => {
        return {
            main: [
                {
                    link: 'home',
                    name: 'Home',
                },
                {
                    link: 'cards',
                    name: 'Cards',
                },
                {
                    link: 'subscriptions',
                    name: 'Subscriptions',
                },
                {
                    link: 'statistics',
                    name: 'Statistics',
                },
            ],
            other: [
                {
                    link: 'settings',
                    name: 'Settings',
                },
                {
                    link: 'help',
                    name: 'Help Center',
                },
            ],
        };
    }, []);

    const currentBankPage = useCurrentBankPage();
    const { changePage } = useActions();

    const handleClickLogo = () => {
        changePage({ prev: currentBankPage.prev, current: 'home' });
    };

    return (
        <div className={`${styles.aside}`}>
            <Link href={'home'} className={`${styles.aside_logo}`} onClick={handleClickLogo}>
                <svg
                    viewBox='0 0 256 227'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='xMidYMid'
                >
                    <title>Tapcart</title>
                    <g>
                        <path
                            d='M243.56268,83.2548079 L172.835493,12.5279481 C168.883105,8.55729097 164.184897,5.40655793 159.011302,3.25664474 C153.837707,1.10673154 148.29022,1.42108547e-14 142.687729,1.42108547e-14 C137.085239,1.42108547e-14 131.537752,1.10673154 126.364157,3.25664474 C121.190562,5.40655793 116.492354,8.55729097 112.539965,12.5279481 L81.0655716,44.1530775 C97.5194499,46.7776571 112.498713,55.1825716 123.312777,67.8584357 C134.126841,80.5341033 140.06721,96.6501035 140.06721,113.312209 C140.06721,129.974315 134.126841,146.090315 123.312777,158.765982 C112.498713,171.442305 97.5194499,179.846696 81.0655716,182.471799 L112.69057,214.126918 C116.642958,218.097641 121.341166,221.247896 126.514761,223.398267 C131.688356,225.547984 137.235843,226.654601 142.838334,226.654601 C148.440825,226.654601 153.988312,225.547984 159.161907,223.398267 C164.335502,221.247896 169.03371,218.097641 172.986098,214.126918 L243.56268,143.36961 C251.526389,135.394115 256,124.583325 256,113.312209 C256,102.041093 251.526389,91.2309577 243.56268,83.2548079 Z M80.1003927,45.1174052 L81.0649168,44.1526192 C71.0614984,42.5569963 60.8309289,43.1504439 51.0790856,45.8921021 C41.3271768,48.6338259 32.2861216,53.4583455 24.5796195,60.0330214 C16.8731174,66.6077628 10.6846441,74.7757697 6.44109795,83.9744359 C2.19757149,93.1724472 -4.12114787e-13,103.181759 -4.12114787e-13,113.312209 C-4.12114787e-13,123.442004 2.19757149,133.451316 6.44109795,142.649327 C10.6846441,151.847994 16.8731174,160.016 24.5796195,166.590873 C32.2861216,173.16509 41.3271768,177.989675 51.0790856,180.731334 C60.8309289,183.472992 71.0614984,184.066898 81.0649168,182.471144 L80.1003927,181.50662 C62.0217528,163.415735 51.8663547,138.887487 51.8663547,113.312209 C51.8663547,87.7362765 62.0217528,63.2077661 80.1003927,45.1174052 Z'
                            fill='#1B191B'
                        ></path>
                    </g>
                </svg>
                <span>ynasty Bank</span>
            </Link>
            <div className={`${styles.aside_categories}`}>
                <div className={`${styles.aside_main}`}>
                    {categories.main.length &&
                        categories.main.map((category, i) => {
                            return (
                                <CategoryItem key={i} link={category.link} name={category.name} />
                            );
                        })}
                </div>
                <div className={`${styles.aside_others}`}>
                    {categories.other.length &&
                        categories.other.map((category, i) => {
                            return (
                                <CategoryItem key={i} link={category.link} name={category.name} />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
