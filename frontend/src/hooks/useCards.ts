import { useTypedSelector } from './useTypedSelector';

export const useCards = () => {
    return useTypedSelector(state => state.cardsReducer);
};
