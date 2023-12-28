import React from 'react';
import styles from './SearchBox.module.scss';
import { usePageSearch } from '@/hooks/usePageSearch';
import { useActions } from '@/hooks/useActions';

const SearchBox = () => {
    const pageSearch = usePageSearch();
    const { updateText } = useActions();

    const typeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateText(e.target.value);
    };

    return (
        <form className={styles.SearchBox}>
            <input
                placeholder='How to save money...'
                type='text'
                value={pageSearch}
                onChange={typeHandler}
                className={styles.SearchInput}
            />
            <button type='submit' className={styles.SearchBtn}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                    />
                </svg>
            </button>
        </form>
    );
};

export default SearchBox;
