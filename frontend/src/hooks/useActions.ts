import { actions as bankPageOpenedActions } from '@/store/slices/bankPageOpened.slice';
import { actions as pageSearchActions } from '@/store/slices/pageSearch.slice';
import { actions as cardsActions } from '@/store/slices/cards.slice';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

const rootActions = {
    ...bankPageOpenedActions,
    ...pageSearchActions,
    ...cardsActions,
};

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
