import React from 'react';
import styles from './Profile.module.scss';

const Profile = () => {
    return (
        <button className={styles.profile} aria-label='Profile Button'>
            <span className={styles.profile_name}>Artem B.</span>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className={styles.profile_arrow}
            >
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
            </svg>

            <img
                className={styles.profile_photo}
                src='/images/avatar-plug.jpeg'
                alt='Profile photo'
            />
        </button>
    );
};

export default Profile;
