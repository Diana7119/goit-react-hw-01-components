import { Stats } from 'components/stats/Stats';
import styles from './profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={username} className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.tag}>{location}</p>
      </div>

      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
