import { useTypedSelector } from './useTypedSelector';

export const usePageSearch = () => {
    const pageSearch = useTypedSelector(state => state.pageSearchReducer);

    return pageSearch;
};
