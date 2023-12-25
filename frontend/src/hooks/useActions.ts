import { actions as bankPageOpenedActions } from '@/store/bankPageOpened/bankPageOpened.slice';
import { actions as pageSearchActions } from '@/store/pageSearch/pageSearch.slice';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

const rootActions = {
    ...bankPageOpenedActions,
    ...pageSearchActions,
};

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
