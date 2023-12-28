import React from 'react';
import styles from './Card.module.scss';
import { CardsState } from '@/store/slices/cards.slice';

type Props = {
    card: CardsState;
};

const Card = ({ card }: Props) => {
    return (
        <div className={styles.card}>
            <div
                className={styles.card_payment}
                style={{
                    backgroundImage:
                        card.payment === 'visa'
                            ? 'url(/svg/cards/visa.svg)'
                            : 'url(/svg/cards/mastercard.svg)',
                    backgroundSize: card.payment === 'visa' ? '70% auto' : '60% auto',
                }}
            />
            <p className={styles.card_type}>
                {card.type === 'debit' ? 'Debit card' : 'Credit card'}
            </p>
            <p className={styles.card_balance}>
                <span className={styles.card_balance_money}>{card.balance}</span>
                <span className={styles.card_balance_currency}>{card.currency}</span>
            </p>
            <p className={styles.card_number}>···· ···· ···· {card.number.slice(-4)}</p>
            <p className={styles.card_expire}>
                {card.expire.month} / {card.expire.year.slice(-2)}
            </p>
        </div>
    );
};

export default Card;
