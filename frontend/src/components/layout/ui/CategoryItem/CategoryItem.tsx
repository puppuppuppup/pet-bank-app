'use client';
import React, { useEffect } from 'react';
import styles from './CategoryItem.module.scss';
import { useActions } from '@/hooks/useActions';
import { BankPageType } from '@/utils/types/types.store';
import { useCurrentBankPage } from '@/hooks/useBankPageOpened';
import Link from 'next/link';

type Props = {
    name: string;
    link: BankPageType;
};

const CategoryItem = (props: Props) => {
    const { changePage } = useActions();
    const currentBankPage = useCurrentBankPage();

    const handleClick = () => {
        if (currentBankPage.current === props.link) return;
        changePage({ prev: currentBankPage.current, current: props.link });
    };

    useEffect(() => {
        changePage({ prev: currentBankPage.current, current: currentBankPage.current });
    }, []);

    return (
        <Link
            type='button'
            className={`${styles.item} ${
                currentBankPage.current === props.link ? styles.active : ''
            } flex align-center width-min bg-no-repeat`}
            style={{ backgroundImage: `url(/svg/categories/${props.link}.svg)` }}
            href={props.link}
            onClick={handleClick}
        >
            {props.name}
        </Link>
    );
};

export default CategoryItem;
