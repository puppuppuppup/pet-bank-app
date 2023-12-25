import { useTypedSelector } from './useTypedSelector';

export const useBankPageOpened = () => {
    const bankPageOpened = useTypedSelector(state => state.bankPageOpenedReducer);

    return bankPageOpened;
};
