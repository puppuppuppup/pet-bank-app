import { useCards } from '@/hooks/useCards';
import React from 'react';
import Card from './Card/Card';

const Cards = () => {
    const cards = useCards();

    return (
        <div>
            {cards.length > 0 &&
                cards.map(card => {
                    return <Card key={card.number} />;
                })}
        </div>
    );
};

export default Cards;
