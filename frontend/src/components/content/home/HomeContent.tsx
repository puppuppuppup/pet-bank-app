'use client';
import React from 'react';
import styles from './HomeContent.module.scss';
import Cards from './Main/Cards/Cards';
import Transactions from './Main/Transactions/Transactions';

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
