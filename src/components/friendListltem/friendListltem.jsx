import styles from './friendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={`${styles.status} ${isOnline && styles.statusOff}`}>
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
