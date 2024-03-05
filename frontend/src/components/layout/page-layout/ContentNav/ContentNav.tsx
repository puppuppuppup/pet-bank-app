import React from 'react';
import styles from './ContentNav.module.scss';
import SearchBox from './SearchBox/SearchBox';
import UserCorner from './UserCorner/UserCorner';

const ContentNav = () => {
    return (
        <div className={`${styles.ContentNav}`}>
            <SearchBox />
            <UserCorner />
        </div>
    );
};

export default ContentNav;
