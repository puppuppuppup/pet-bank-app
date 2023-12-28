import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface CardsState {
    type: 'debit' | 'credit';
    number: string;
    balance: number;
    currency: string;
    expire: {
        month: string;
        year: string;
    };
    payment: 'visa' | 'mastercard';
}

const initialState: CardsState[] = [
    {
        type: 'debit',
        number: '1234 5678 9876 5432',
        balance: 1500.96,
        currency: 'RUB',
        expire: {
            month: '09',
            year: '2023',
        },
        payment: 'mastercard',
    },
    {
        type: 'credit',
        number: '5555555555555555',
        balance: 101296,
        currency: 'USD',
        expire: {
            month: '08',
            year: '2025',
        },
        payment: 'visa',
    },
];

const cardsSlice = createSlice({
    name: 'cardsSlice',
    initialState,
    reducers: {
        addCard(state, { payload: card }: PayloadAction<CardsState>) {
            return [...state, card];
        },
    },
});

export const { reducer, actions } = cardsSlice;
