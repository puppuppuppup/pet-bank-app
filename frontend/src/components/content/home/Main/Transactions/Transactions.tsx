import React from 'react';
import styles from './Transactions.module.scss';
import Filters from './Filters/Filters';

type Props = {};

const Transactions = (props: Props) => {
    return (
        <div className={styles.transactions}>
            <h3 className={styles.transactions_title}>Transactions</h3>
            <Filters />
        </div>
    );
};

export default Transactions;
