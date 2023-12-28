import React from 'react';
import styles from './UserCorner.module.scss';
import Notifications from './Notifications/Notifications';
import Profile from './Profile/Profile';

const UserCorner = () => {
    return (
        <div className={styles.UserCorner}>
            <Notifications />
            <Profile />
        </div>
    );
};

export default UserCorner;
