import styles from './statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}

      <ul className={styles.statList}>
        {stats.map(el => {
          return (
            <li
              key={el.id}
              className={styles.item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
