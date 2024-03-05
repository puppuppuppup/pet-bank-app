import { useCards } from '../../../../hooks/useCards';
import React, { useState } from 'react';
import Card from './Card/Card';
import styles from './Cards.module.scss';

const Cards = () => {
    const cards = useCards();
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    const handleChanging = (isNext: boolean) => {
        if (isChanging) return;
        setIsChanging(true);
        setTimeout(() => {
            if (isNext) {
                if (currentCardIndex === cards.length - 1) {
                    setCurrentCardIndex(0);
                } else {
                    setCurrentCardIndex(prev => prev + 1);
                }
            } else {
                if (currentCardIndex === 0) {
                    setCurrentCardIndex(cards.length - 1);
                } else {
                    setCurrentCardIndex(prev => prev - 1);
                }
            }
            setIsChanging(false);
        }, 200);
    };

    return (
        <div className={`${styles.cards} ${isChanging ? styles.changing : ''}`}>
            <Card card={cards[currentCardIndex]} />
            {cards.length > 1 && (
                <>
                    <button className={styles.cards_btn} onClick={() => handleChanging(true)}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m8.25 4.5 7.5 7.5-7.5 7.5'
                            />
                        </svg>
                    </button>
                    <button className={styles.cards_btn} onClick={() => handleChanging(false)}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m8.25 4.5 7.5 7.5-7.5 7.5'
                            />
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
};

export default Cards;
