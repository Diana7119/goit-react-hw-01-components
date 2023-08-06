import styles from './statst.module.css';
import PropTypes from 'prop-types';

export const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>
          {followers.toLocaleString('en-US')}
        </span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views.toLocaleString('en-US')}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes.toLocaleString('en-US')}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
