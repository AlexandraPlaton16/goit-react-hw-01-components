import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      {' '}
      {/* Use styles.profile here */}
      <div className={styles.description}>
        {' '}
        {/* Use styles.description here */}
        <img src={avatar} alt="User avatar" className={styles.avatar} />{' '}
        {/* Use styles.avatar here */}
        <p className={styles.name}>{username}</p> {/* Use styles.name here */}
        <p className={styles.tag}>@{tag}</p> {/* Use styles.tag here */}
        <p className={styles.location}>{location}</p>{' '}
        {/* Use styles.location here */}
      </div>
      <ul className={styles.stats}>
        {' '}
        {/* Use styles.stats here */}
        <li>
          <span className={styles.label}>Followers</span>{' '}
          {/* Use styles.label here */}
          <span className={styles.quantity}>{stats.followers}</span>{' '}
          {/* Use styles.quantity here */}
        </li>
        <li>
          <span className={styles.label}>Views</span>{' '}
          {/* Use styles.label here */}
          <span className={styles.quantity}>{stats.views}</span>{' '}
          {/* Use styles.quantity here */}
        </li>
        <li>
          <span className={styles.label}>Likes</span>{' '}
          {/* Use styles.label here */}
          <span className={styles.quantity}>{stats.likes}</span>{' '}
          {/* Use styles.quantity here */}
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default Profile;
