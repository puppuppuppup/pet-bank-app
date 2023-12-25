'use client';
import React, { useEffect } from 'react';
import styles from './CategoryItem.module.scss';
import { useActions } from '@/hooks/useActions';
import { BankPageType } from '@/utils/types/types.store';
import { useBankPageOpened } from '@/hooks/useBankPageOpened';
import Link from 'next/link';

type Props = {
    name: string;
    link: BankPageType;
};

const CategoryItem = (props: Props) => {
    const { changePage } = useActions();
    const bankPageOpened = useBankPageOpened();

    const handleClick = () => {
        if (bankPageOpened.current === props.link) return;
        changePage({ prev: bankPageOpened.current, current: props.link });
    };

    useEffect(() => {
        changePage({ prev: bankPageOpened.current, current: bankPageOpened.current });
    }, []);

    return (
        <Link
            type='button'
            className={`${styles.item} ${
                bankPageOpened.current === props.link ? styles.active : ''
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
