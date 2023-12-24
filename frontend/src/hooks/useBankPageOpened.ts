import { useTypedSelector } from './useTypedSelector';

export const useCurrentBankPage = () => {
    const currentBankPage = useTypedSelector(state => state.bankPageOpened);

    return currentBankPage;
};
