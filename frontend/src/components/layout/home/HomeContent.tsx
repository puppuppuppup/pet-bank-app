'use client';
import React from 'react';
import styles from './HomeContent.module.scss';
import Cards from '@/components/layout/home/Cards/Cards';
import Transactions from '@/components/layout/home/Transactions/Transactions';

const HomeContent = () => {
    return (
        <div className={`page-content ${styles.content}`}>
            <h2 className={styles.content_heading}>Overview</h2>
            <div className={styles.content_main}>
                <Cards />
                <Cards />
                <Transactions />
            </div>
        </div>
    );
};

export default HomeContent;
